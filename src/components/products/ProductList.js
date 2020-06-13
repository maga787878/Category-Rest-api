import React, { Component } from 'react'
import { connect } from "react-redux";
import Chip from '@material-ui/core/Chip';
import "./productlist.css"
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import alertify from 'alertifyjs'




 class ProductList extends Component {
   componentDidMount(){
     this.props.actions.getProducts();
   }
   addToCart =(product)=>{
   this.props.actions.addToCart({quantity:1,product})
   alertify.success(product.productName+ " Səbətə Əkləndi")
   }
    render() {
        return (
            <div>
              <Chip label="Product" color="primary" ></Chip>
                 {this.props.currentCategory.categoryName ? <Chip variant="outlined" label= {this.props.currentCategory.categoryName} /> :null}
                
                {this.props.currentCategory.id? <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Product Name</TableCell>
                     <TableCell>Unit Price</TableCell>
                     <TableCell>Quantity Per Unit</TableCell>
                      <TableCell>Units In Stock</TableCell>
                      <TableCell></TableCell>
                       </TableRow>
                   </TableHead>
                    <TableBody>
                      
                    {this.props.products.map(product=>(
                        <TableRow key={product.id}>
                          <TableCell>{product.id}</TableCell>
                          <TableCell>{product.productName}</TableCell>
                          <TableCell>{product.unitPrice}</TableCell>
                          <TableCell>{product.quantityPerUnit}</TableCell>
                          <TableCell>{product.unitsInStock}</TableCell>
                          <TableCell> 
                            <Button onClick={()=>this.addToCart(product)} variant="contained" size="small" color="primary">
          Add
        </Button>
        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                  </Table>
                 </TableContainer>
                 :null}
                
                
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
      currentCategory: state.changeCategoryReducer,
      products:state.productListReducer
    };
  }


  function mapDispachToProps(dispatch) {
    return {
      actions: {
        getProducts: bindActionCreators(
          productActions.getProducts,
          dispatch
        ),
        addToCart:bindActionCreators(
          cartActions.addToCart,
          dispatch
        ),
      },
    };
  } 

export default connect(mapStateToProps,mapDispachToProps)(ProductList);
