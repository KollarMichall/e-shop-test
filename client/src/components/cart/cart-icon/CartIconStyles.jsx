import { HiOutlineShoppingBag } from "react-icons/hi";
import styled from "styled-components";

export const CartContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ShoppingIcon = styled(HiOutlineShoppingBag)`
    width: 40px;
    height: 40px;
`;

export const ItemCountContainer = styled.span`
    position: absolute;
    font-size: 11px;
    font-weight: bold;
    bottom: 10px;
`;