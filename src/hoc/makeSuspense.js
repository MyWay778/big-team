import React from 'react'
import Preloader from "../components/MainContent/UsersContent/UsersCardContainer/UsersCard/Preloader/Preloader";

const makeSuspense = Component => {
        return (props) => <React.Suspense fallback={
            <div className="center-position ">
                <Preloader />
            </div>
        }>
            <Component {...props}/>
        </React.Suspense>
}

export default makeSuspense