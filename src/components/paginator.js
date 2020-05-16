import React from "react"
import { Link } from "gatsby";
import PropTypes from "prop-types"

const Pager = ({ pageContext }) => {
	const {previousPagePath, nextPagePath } = pageContext;

	return (
		<div className="mx-5 my-5">
			{previousPagePath && (
				<span className="float-left h5">
					<Link to={previousPagePath}> Previous </Link>
				</span>
			)}
			{nextPagePath && (
				<span className="float-right h5">
					<Link to={nextPagePath}> Next </Link>
				</span>
			)}
		</div>
	)
}

Pager.propTypes = {
	pageContext: PropTypes.object.isRequired,
};



export default Pager;