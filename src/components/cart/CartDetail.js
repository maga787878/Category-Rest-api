import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import alertify from 'alertifyjs'


import * as cartActions from "../../redux/actions/cartActions";

class CartDetail extends Component {
    removeFromCart(product){
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName+ " Səbətən silindi")
    }
  render() {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Unit Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.cart.map(cartItem => (
                <TableRow key={cartItem.product.id}>
                  <TableCell>{cartItem.product.id}</TableCell>
                  <TableCell>{cartItem.product.productName}</TableCell>
                  <TableCell>{cartItem.product.unitPrice}</TableCell>
                  <TableCell>{cartItem.quantity}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => this.removeFromCart(cartItem.product)}
                      variant="contained"
                      size="small"
                      color="danger"
                    >
                      sil
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
