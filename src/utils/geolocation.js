/* eslint-env browser */

export const getGeolocationData = async () => {
    if ( !navigator.geolocation ) {
        throw new Error( 'Geolocation is not supported' );
    }

    return new Promise( ( resolve, reject ) => {
        navigator.geolocation.getCurrentPosition(
            async ( position ) => {
                const { latitude, longitude } = position.coords;

                try {
                    const res = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                    );
                    const data = await res.json();
                    const { city, postcode } = data.address || {};
                    resolve( { city, postalCode: postcode } );
                } catch ( err ) {
                    reject( 'Failed to reverse geocode' );
                }
            },
             (err) => {
        console.error(err);
        reject('Permission denied or error fetching location');
      }

        );
    } );
};
