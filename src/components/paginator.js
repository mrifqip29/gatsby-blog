import React from "react"
import { Link } from "gatsby";
import PropTypes from "prop-types"

import paginatorStyles from "./paginator.module.scss"

const Pager = ({ pageContext }) => {
	const {previousPagePath, nextPagePath } = pageContext;

	return (
		<div className="mx-5 my-5">
			{previousPagePath && (
				<Link to={previousPagePath} className={paginatorStyles.prev}>Previous </Link>
			)}
			{nextPagePath && (
				<Link to={nextPagePath} className={paginatorStyles.next}>Next </Link>
			)}
		</div>
	)
}

Pager.propTypes = {
	pageContext: PropTypes.object.isRequired,
};



export default Pager;