import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import "@testing-library/jest-dom";
import  Dashboard  from '../components/dashboard.jsx';

describe('Testing for Dashboard Components', ()=> {
    it('it should contain all the header elements', ()=>{
        // eslint-disable-next-line react/react-in-jsx-scope
        const { getByTestId } = render(<Dashboard />);
        const AppBar = getByTestId('appBar');
        const ToolBar = getByTestId('toolbar');
        const IconButton = getByTestId('iconButton');
        const MenuIcon = getByTestId('menuIcon')
        const Header = getByTestId('header');
        const Exit = getByTestId('exitToOut');

        expect(AppBar).toBeInTheDocument();
        expect(ToolBar).toBeInTheDocument();
        expect(IconButton).toBeInTheDocument();
        expect(Header).toBeInTheDocument();
        expect(MenuIcon).toBeInTheDocument();
        expect(Exit).toBeInTheDocument();
    })

    it('it should contains all the side bar elements', ()=>{
        const { getByTestId }  = render(<Dashboard />);
        // eslint-disable-next-line react/react-in-jsx-scope
        const Drawer = getByTestId("drawer");
        const DrawerIcon = getByTestId("drawerIconButton"); 
        const Divider = getByTestId("divider");
        const List= getByTestId("listElements");
        const listElementIcon = getByTestId("listElementIcon")
        const AddElementIcon = getByTestId("addElementIcon");
        const EditElementIcon = getByTestId("editElementIcon");
        const DeleteElementIcon = getByTestId("deleteElementIcon");
        
        expect(Drawer).toBeInTheDocument();
        expect(DrawerIcon).toBeInTheDocument();
        expect(Divider).toBeInTheDocument();
        expect(List).toBeInTheDocument();
        expect(listElementIcon).toBeInTheDocument();
        expect(EditElementIcon).toBeInTheDocument();
        expect(AddElementIcon).toBeInTheDocument();
        expect(DeleteElementIcon).toBeInTheDocument();
    })
});