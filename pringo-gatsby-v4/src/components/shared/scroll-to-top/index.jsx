import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { useScrollTop } from "@hooks";
import { ScrollTopButton } from "./style";

const ScrollToTop = ({ className, ...props }) => {
    const stick = useScrollTop();
    const onClickHandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (stick) {
        return (
            <ScrollTopButton
                type="button"
                className={cn(className, "scroll-to-top")}
                onClick={onClickHandler}
                isStick={true}
                {...props}
            >
                <i className="icon arrow-up icofont-arrow-up"></i>
                <i className="icon arrow-bottom icofont-arrow-up"></i>
            </ScrollTopButton>
        );
    } else {
        return null;
    }
};

ScrollToTop.propTypes = {
    className: PropTypes.string,
};

export default ScrollToTop;
