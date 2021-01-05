import { AddProduct, RemoveProduct } from '../actions/product.action' ;
import { ProductStateModel, Product } from '../models/product.model' ;
import { NgxsModule, Action, Selector, State, StateContext } from "@ngxs/store";

@State<ProductStateModel>({
  name: "products",
  defaults: {
    products: []
  }
})

export class ProductState {
  @Selector()
  static getProducts(state: ProductStateModel){
    return state.products ;
  }

  @Action(AddProduct)
    add( {getState, patchState} : StateContext<ProductStateModel>, {payload}:AddProduct){
      const state = getState();
      patchState({
        products: [...state.products, payload]
      }) ;
    }

  @Action(RemoveProduct)
    remove( {getState, patchState}: StateContext<ProductStateModel>, { payload }: RemoveProduct ){
        const state = getState() ;
        const index = state.products.findIndex((i: Product) => i.id === payload.id) ;

        if (index !== -1) {
            const refreshedCart = state.products;
            refreshedCart.splice(index, 1);

            patchState( { products: refreshedCart } );
        }
    }
}
