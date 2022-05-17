import { createContext } from "react";

import {getCartItems} from '../modules/cart';

const ctx = createContext(getCartItems());
export default ctx;