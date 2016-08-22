var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

const baseRecipeList = [
	{
		"name": "Chocolate Mug Cake",
		"ingredients": [{"amount": 1, "unit": "units", "name": "Large Egg"},{"amount": 2, "unit": "tbsp", "name": "Salted Butter"}],
		"url": "http://www.ruled.me/keto-chocolate-cake-mug/"
	},
	{
		"name": "Sweet Tahini Bread",
		"ingredients": [{"amount": 400, "unit": "g", "name": "Light Tahini"},{"amount": 4, "unit": "units", "name": "Large Eggs"}],
		"url": "http://ketointhe.uk/post/128924487074/tahinibread"
	}
]

const recipeList = localStorage.getItem("_xiavn_recipeList") === null ? baseRecipeList : JSON.parse(localStorage.getItem("_xiavn_recipeList"));

class RecipeBox extends React.Component {
	constructor() {
		super();
		this.state = {
			recipeList: recipeList,
			modalOpen: false,
			edit: false,
			id: "",
			recipe: {
				name: "",
				ingredients: [],
				url: ""
			}
		};
	}
	
	saveBox(recipeList) {
		localStorage.setItem('_xiavn_recipeList', JSON.stringify(recipeList));
	}
	
	eraseBox() {
		localStorage.removeItem('_xiavn_recipeList');
	}
	
	editRecipe(id) {
		const recipe = this.state.recipeList[id];
		this.setState({
			modalOpen: true,
			edit: true,
			recipe: recipe,
			id: id
		});
	}
	
	deleteRecipe(id) {
	let recipes = this.state.recipeList.slice();
		recipes.splice(id, 1);
		this.setState({recipeList: recipes}, this.saveBox(recipes));
	}
	
	updateCurrentRecipes(recipeDetails) {
		const recipe = {
			name: recipeDetails.name,
			ingredients: recipeDetails.ingredients,
			url: recipeDetails.url
		};
		
		const recipeList = this.state.recipeList.concat(recipe);
		
		this.setState({
			recipeList: recipeList,
			modalOpen: false
		}, this.saveBox(recipeList));
	}
	
	saveEdits(recipeDetails) {
		const recipe = {
			name: recipeDetails.name,
			ingredients: recipeDetails.ingredients,
			url: recipeDetails.url
		};
		
		let recipeList = this.state.recipeList.slice();
		recipeList[this.state.id] = recipe;
		this.setState({
			recipeList: recipeList,
			modalOpen: false,
			edit: false,
			id: "",
			recipe: {
				name: "",
				ingredients: [],
				url: ""
			}
		}, this.saveBox(recipeList));
	}
	
	render() {
		return (
			<div className="recipeBox">
				<h1>Ingredients</h1>
				<Recipes recipes={this.state.recipeList} delete={this.deleteRecipe.bind(this)} edit={this.editRecipe.bind(this)} />
				<RecipeControls update={this.updateCurrentRecipes.bind(this)} isOpen={this.state.modalOpen} edit={this.state.edit} id={this.state.id} recipe={this.state.recipe} saveEdits={this.saveEdits.bind(this)}/>
				<EraseBox eraseBox={this.eraseBox.bind(this)}/>
			</div>
		);
	}
}

class Recipes extends React.Component {
	constructor() {
		super();
		this.state = {
			active: ""
		};
	}
	
	expandIngredients(recipe) {
		this.setState({
			active: recipe
		});
	}
	
	collapseIngredients() {
		this.setState({
			active: ""
		});
	}
	
	render() {
		let recipes = this.props.recipes.map((recipe, i) => {
			if (this.state.active === recipe.name) {
				return <Recipe {...this.props} recipe={recipe} toggle={this.collapseIngredients.bind(this)} id={i} active="active"/>
			} else {
				return <Recipe {...this.props} recipe={recipe} toggle={this.expandIngredients.bind(this)} id={i} active="hidden"/>
			};
		});
		return (
			<ul className="recipes">
				{recipes}
			</ul>
		);
	}
}

class IngredientList extends React.Component {
	render() {
		let ingredients = this.props.ingredients.map((item) => {
			return <li><Ingredients ingredient={item}/></li>;
		});
		let classes = this.props.show === "active" ? "ingredientList active" : "ingredientList hidden";
		return (
			<ul className={classes}>
				{ingredients}
			</ul>
		);
	}
}

class Recipe extends React.Component {
	render() {
		return (
			<li className="recipe">
				<h2>{this.props.recipe.name}</h2>
				<ButtonTools {...this.props} />
				<IngredientList ingredients={this.props.recipe.ingredients} show={this.props.active} />
			</li>
		);
	}
}

class RecipeControls extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			modalOpen: props.isOpen,
			ingredients: [],
			dragged: "",
			url: ""
		}
	}
	
	//When recipe edit button press, the modal opens. Forces update of state with new prop.
	componentWillReceiveProps(nextProps) {
		this.setState({
			modalOpen: nextProps.isOpen,
			name: nextProps.recipe.name,
			ingredients: nextProps.recipe.ingredients,
			url: nextProps.recipe.url
		});
	}
	
	addRecipe(e) {
		e.preventDefault();
		this.setState({name: this.refs.name.value, modalOpen: true});
		this.refs.name.value = "";
	}
	
	deleteIngredient(id) {
		let ingredients = this.state.ingredients.slice();
		ingredients.splice(id, 1);
		this.setState({ingredients: ingredients});
}
	
	addIngredient(ingredient) {
		this.setState({
				ingredients: this.state.ingredients.concat(ingredient)
		});
	}
	
	changeName(event) {
		this.setState({
			name: event.target.value
		});
	}
	
	changeURL(event) {
		this.setState({
			url: event.target.value
		});
	}
	
	editRecipe() {
		const recipe = {
			name: this.state.name,
			ingredients: this.state.ingredients,
			url: this.state.url
		}
		this.props.saveEdits(recipe);
	}
	
	updateRecipes() {
		this.props.update({name: this.state.name, ingredients: this.state.ingredients, url: this.state.url});
		this.setState({modalOpen: false});
	}
	
	dragStart(e) {
		this.setState({dragged: Number(e.currentTarget.dataset.id)});
		//Define the drag's data
		e.dataTransfer.setData("text/html", e.currentTarget);
		//The drag effect
		e.dataTransfer.effectAllowed = "move";
	}
	
	dragOver(e) {
		e.preventDefault();
		let ingredients = this.state.ingredients.slice();
		const currentPos = this.state.dragged;
		
		//Get the position the mouse is currently over
		const goingOver = Number(e.currentTarget.dataset.id);
		
		//Reaarange the array held in state
		const currentIngredient = ingredients[currentPos];
		ingredients.splice(currentPos, 1);
		ingredients.splice(goingOver,0,currentIngredient);
		this.setState({ingredients: ingredients, dragged: goingOver});
	}
	
	render() {
		const recipeInputShow = this.state.modalOpen ? "recipeControlsForm hidden" : "recipeControlsForm";
		return (
			<div className="recipeControls">
				<Modal name={this.state.name} url={this.state.url} isOpen={this.state.modalOpen} ingredients={this.state.ingredients} addIngredient={this.addIngredient.bind(this)} changeName={this.changeName.bind(this)} changeURL={this.changeURL.bind(this)} update={this.updateRecipes.bind(this)} dragStart={this.dragStart.bind(this)} dragOver={this.dragOver.bind(this)} delete={this.deleteIngredient.bind(this)} edit={this.props.edit} editRecipe={this.editRecipe.bind(this)}/>
				<form className={recipeInputShow} onSubmit={this.addRecipe.bind(this)}>
					<input 
						className="recipeName"
						type="text"
						ref="name"
						placeholder="Chocolate Hazelnut Spread"
						size="5"
					/>
					<input 
						className="btn-add"
						type="submit" 
						value="+"
						aria-label="Add Recipe" />
				</form>
			</div>
		);
	}
}

class Modal extends React.Component {
	
submitIngredient(e) {
	e.preventDefault();
	const ingredient = {
		"amount": this.refs.amount.value,
		"unit": this.refs.unit.value,
		"name": this.refs.ingredient.value
	};
	this.props.addIngredient(ingredient);
	this.refs.amount.value = "";
	this.refs.unit.value = "units";
	this.refs.ingredient.value = "";
}
	
	render() {
		const isOpen = this.props.isOpen ? "modal active" : "modal hidden";
		const ingredients = this.props.ingredients.map((item, i) => {
			return <li data-id={i}
							 key={i}
							 draggable="true"
							 onDragStart={this.props.dragStart}
							 onDragOver={this.props.dragOver}>
				<Ingredients ingredient={item} /> <ButtonDelete delete={this.props.delete} id={i} />
			</li>;
		});
		const buttonControls = (this.props.edit) ? <li><button className="btn-modal" onClick={this.props.editRecipe}>Edit Recipe</button></li> : <li><button className="btn-modal" onClick={this.props.update}>Save New Recipe</button></li>;
		
		return (
			<div className={isOpen}>
				<input 
					className="recipeName"
					type="text"
					size="2"
					value={this.props.name}
					onChange={this.props.changeName.bind(this)}
				/>
				<ul className="modalIngredientList">
					{ingredients}
				</ul>
				<form className="addIngredient" onSubmit={this.submitIngredient.bind(this)}>
					<input
						type="number"
						placeholder="20"
						size="5"
						ref="amount"
						required
					/>
					<select required id="Units" ref="unit">
						<option value="units">units</option>
						<option value="g">g</option>
						<option value="lb">lb</option>
						<option value="oz">oz</option>
						<option value="kg">kg</option>
						<option value="tsp">tsp</option>
						<option value="tbsp">tbsp</option>
						<option value="cup">cup</option>
						<option value="pt">pt</option>
						<option value="ml">ml</option>
						<option value="l">l</option>
					</select>
					<input
						ref="ingredient"
						required
						type="text"
						placeholder="Self-Raising Flour"
						size="5"
					/>
					<input
						type="submit"
						className="btn-add"
						value="+"
						aria-label="Add Ingredient"
					/>
					<div className="url-input">
						<span className="btn-add" aria-label="Add URL"><i className="fa fa-home"></i></span>
						<input 
							ref="url"
							type="url"
							placeholder="http://myrecipe.com/awesome-chocolate-recipe/"
							size="5"
							value={this.props.url}
							onChange={this.props.changeURL.bind(this)}
						/>
					</div>
				</form>
				<ul className="btn-modal-controls">
					{buttonControls}
				</ul>
			</div>
		);
	}
}

class ButtonTools extends React.Component {
	render() {
		const button = this.props.active === "active" ? <ButtonMinus name={this.props.recipe.name} toggle={this.props.toggle} /> : <ButtonPlus name={this.props.recipe.name} toggle={this.props.toggle} />;
		
		return (
			<ul className="buttonTools">
				<ButtonLink url={this.props.recipe.url} />
				<ButtonEdit id={this.props.id} edit={this.props.edit} />
				<li><ButtonDelete delete={this.props.delete} id={this.props.id}/></li>
				{button}
			</ul>
		);
	}
}

const EraseBox = (props) => <div className="eraseBox"><a className="btn-box" onClick={props.eraseBox.bind(this)}>Erase Box</a></div>;

const ButtonPlus = (props) => <li><a className="btn-recipe" onClick={props.toggle.bind(this, props.name)} aria-label="Show Ingredients"><i className="fa fa-angle-down" /></a></li>;

const ButtonMinus = (props) => <li><a className="btn-recipe" onClick={props.toggle.bind(this, props.name)} aria-label="Hide Ingredients"><i className="fa fa-angle-up" /></a></li>;

const ButtonLink = (props) => <li><a className="btn-recipe" href={props.url} target="_blank" aria-label="Recipe Homepage"><i className="fa fa-home" /></a></li>;

const ButtonEdit = (props) => <li><a className="btn-recipe" onClick={props.edit.bind(this, props.id)} aria-label="Edit"><i className="fa fa-pencil-square-o" /></a></li>;

const ButtonDelete = (props) =><a className="btn-recipe" onClick={props.delete.bind(this, props.id)} aria-label="Delete"><i className="fa fa-trash-o" /></a>;
				
const Ingredients = (props) => {
	const amount = props.ingredient.amount,
				name = props.ingredient.name,
				unit = props.ingredient.unit,
				nonWeight = /tsp|tbsp|cup/g;
	let ingredient = ``;
	if (unit === "units") {
		ingredient = `${amount} ${props.ingredient.name}`;
	} else if (unit.search(nonWeight) != -1) {
		ingredient = `${amount} ${unit} ${props.ingredient.name}`;
	} else {
		 ingredient = `${amount}${unit} ${name}`;
	};
	return <span>{ingredient}</span>
};

ReactDOM.render(<RecipeBox />, document.getElementById('app'));