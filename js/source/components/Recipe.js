import React from 'react';
import ReactDOM from 'react-dom';
import {Component, PropTypes} from 'react';
//import Bootstrap from 'bootstrap';
import $ from 'jquery';
//import Bootstrap from 'bootstrap';
import {Button, Collapse, Well, Modal, closeButton} from 'react-bootstrap';
import RecipeModal from './RecipeModal';

class Recipe extends Component {

  constructor(props) {




    super(props);
    this.state = {
      recipeName: this.props.name,
      listOfIngredients: this.props.ingredList,
      showModal:false,
      newRecipeName:this.props.name,
      newListOfIngredients:this.props.ingredList,
      dispatch: this.props.dispatcher,
      //deleteThisRecipe:this.props.removeThisRecipeCallback,
      //indexOfThisRecipe:this.props.indexOfThisRecipe,
      //updateThisRecipe:this.props.updateAllRecipes,
    }
  }

  close() {
    this.setState({
      showModal:false,
      newRecipeName: this.state.recipeName,
      newListOfIngredients: this.state.listOfIngredients,
    });

  }

  open() {
    this.setState({
      showModal:true,
    });
  }


  _updateRecipeName(evt) {
    this.setState({
      newRecipeName:evt.target.value,
    });
  }

  _updateIngredList(evt) {
    let newIngredList = evt.target.value.split(',');

    this.setState({
      newListOfIngredients:newIngredList,

    });

   // this.state.updateThisRecipe();
  }

  _submitNewRecipeInfo() {

     //remove empty ingredients
    var newIngredList = this.state.newListOfIngredients.filter(function(value){
      if (value.length > 0) {
        return value;
    }
    });

    this.setState({
      recipeName: this.state.newRecipeName,
      listOfIngredients: newIngredList,
      showModal:false,
    });


  }

  /*
  _deleteThisRecipe() {
    this.state.deleteThisRecipe(this.state.indexOfThisRecipe);
  }*/

  render() {
    return (
      <div>
          <Button id="recipe" onClick={() => this.setState({open:!this.state.open})}>
            <h1>{this.state.recipeName}</h1>
          </Button>

        <Collapse in={this.state.open} id="recipe-content">
          <div>
              <Well id="ingredient-space">
                <h1 id="ingredient-heading">Ingredients</h1>
                {

                  this.state.listOfIngredients.map(function(ingredient,keyId) {
                  return (
                    <p id="ingredient" key={keyId}>
                    {ingredient}
                    </p>);
                })

                }
               <div>
                <Button id="delete">Delete Recipe</Button>
                <Button id="edit" onClick={this.open.bind(this)}>Edit</Button>
               </div>
              </Well>
          </div>

        </Collapse>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <p className="modal-text">Recipe</p>
            <input type="text" placeholder="Recipe Name" onChange={this._updateRecipeName.bind(this)} id="name-of-recipe" value={this.state.newRecipeName}/>
            <p className="modal-text">Ingredients</p>
            <textarea placeholder="Enter ingredients separate by comma" onChange={this._updateIngredList.bind(this)} id="ingredient-text" value={this.state.newListOfIngredients}>
            </textarea>

          </Modal.Body>
          <Modal.Footer>
            <Button id="EditRecipe" className="btn btn-primary" onClick={this._submitNewRecipeInfo.bind(this)}>Edit Recipe</Button>
            <Button id="CloseRecipeModal" className="btn btn-primary" onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default Recipe