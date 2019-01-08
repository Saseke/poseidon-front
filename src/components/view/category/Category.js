import React, {Component} from 'react';
import MiddleBar from '../../../containers/MiddleBar';
import ItemDetail from '../../../containers/ItemDetail';
import Footer from '../../../containers/Footer';
import TopBar from '../../../containers/TopBar';

class Category extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <MiddleBar/>
                <ItemDetail/>
                <Footer/>
            </div>
        );
    }
}

export default Category;