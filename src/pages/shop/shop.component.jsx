import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';


import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {

        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();

        // const { updateCollections } = this.props;
        // const collectionRef = firestore.collection('collections');


        // //1. firebase store snapshot
        // // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        // //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        // //     updateCollections(collectionsMap);
        // //     this.setState({ loading: false });
        // // });

        // //2. promise
        // collectionRef.get().then(snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({ loading: false });
        // });

        //3. fetch
        // fetch('https://firestore.googleapis.com/v1/projects/crown-db-e0e73/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections => console.log(collections));
    }

    render() {
        const { match } = this.props;
        
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}  />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        );
    };
}  

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);