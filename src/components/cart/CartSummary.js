import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
  } from 'reactstrap';
import Badge from '@material-ui/core/Badge';
import * as cartActions from "../../redux/actions/cartActions";
import Chip from '@material-ui/core/Chip';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';

import alertify from 'alertifyjs'



class CartSummary extends Component {
    removeFromCart(product){
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName+ " Səbətən silindi")
    }

    renderEmpty(){
        return(
          <NavItem>
              <NavLink>Sepetiniz bos</NavLink>
          </NavItem>
        )
    }
    renderSummary(){
        return(
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Sepetiniz
            </DropdownToggle>
            <DropdownMenu right>
                {this.props.cart.map(cartItem=>
                <DropdownItem key={cartItem.product.id}>
                     <Chip
                
        label="Sil"
        onDelete={()=>this.removeFromCart(cartItem.product)}
      />

                    <Badge badgeContent={cartItem.quantity} color="primary">
                    {cartItem.product.productName}
                    </Badge>
              </DropdownItem>
                    )}
              
              
              <DropdownItem divider />
              <DropdownItem>
                <Link to={"/cart"}>sepete git</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        )
    }
    render() {
        return (
            <div>
             {
                 this.props.cart.length>0?this.renderSummary():this.renderEmpty()
             }   
                
            </div>
        )
    }
}
 function mapStateToProps(state){
     return{
         cart:state.cartReducer
     }
 }
 function mapDispatchToProps(dispatch){
     return{
         actions:{
             removeFromCart:bindActionCreators(
                cartActions.removeFromCart,
                dispatch
              ),
         }
     }
 }

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary)