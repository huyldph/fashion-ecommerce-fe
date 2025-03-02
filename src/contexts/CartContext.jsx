import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItemIndex = state.items.findIndex(
                item => 
                    item.id === action.payload.id && 
                    item.size === action.payload.size && 
                    item.color === action.payload.color
            );

            if (existingItemIndex !== -1) {
                // Nếu sản phẩm đã tồn tại (cùng id, size và color)
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex].quantity += action.payload.quantity;
                return {
                    ...state,
                    items: updatedItems,
                };
            }

            // Nếu là sản phẩm mới
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => 
                    !(item.id === action.payload.id && 
                      item.size === action.payload.size && 
                      item.color === action.payload.color)
                ),
            };

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id &&
                    item.size === action.payload.size &&
                    item.color === action.payload.color
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };

        default:
            return state;
    }
};

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}