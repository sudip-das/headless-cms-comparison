import Navigation from "../Navigation";
import {Footer} from "../footers/Footer";
import SmallHeader from "../headers/SmallHeader";
import HomeHeader from "../headers/HomeHeader";

type PropTypes = {
    children?: JSX.Element;
    isHome?: boolean;
    headerContent?: string;
};

export const Layout = ({headerContent, isHome = false, children}: PropTypes): JSX.Element => {

    return (
        <div id={"root"}>
            <div className={"App"}>
                <Navigation />
                {isHome && (
                    <HomeHeader />
                )}

                {!isHome && headerContent && (
                    <SmallHeader title={headerContent}/>
                )}
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );

};
