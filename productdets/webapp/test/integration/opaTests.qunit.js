sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'naro/train/productdets/test/integration/FirstJourney',
		'naro/train/productdets/test/integration/pages/ProductsList',
		'naro/train/productdets/test/integration/pages/ProductsObjectPage',
		'naro/train/productdets/test/integration/pages/Order_DetailsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage, Order_DetailsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('naro/train/productdets') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage,
					onTheOrder_DetailsObjectPage: Order_DetailsObjectPage
                }
            },
            opaJourney.run
        );
    }
);