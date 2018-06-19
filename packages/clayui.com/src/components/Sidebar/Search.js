import React from 'react';

const Search = ({placeholder}) => (
    <div className="page-autocomplete">
		<div className="form-group">
			<div className="input-group">
				<input
					className="form-control"
					name="q"
					placeholder={placeholder}
					required
					type="text"
				/>

				<span className="input-group-addon">
					<svg className="lexicon-icon">
						<use xlinkHref="#search" />
					</svg>
				</span>
			</div>
		</div>
	</div>
);

export default Search;