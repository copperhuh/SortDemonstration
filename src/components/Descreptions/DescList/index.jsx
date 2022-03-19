import React from "react";
import styled from "styled-components";
import DescListStyled from "./DescList.styles";
import { deCamelCase } from "../../../utils";
import { connect } from "react-redux";
import { doChangeDescription } from "../../../redux/Actions";

const LiWithMarker = styled.li`
	position: relative;
	&::before {
		position: absolute;
		content: "${(props) => (props.open ? "-" : "+")}";
		color: ${(props) => props.theme.colors.main};
		font-family: ${(props) => props.theme.fonts.main};
		font-weight: 00;
		font-size: 1.5rem;
		font-size: ${(props) => (props.open ? "1.6rem" : "1.3rem")};
		top: 50%;
		transform: translateY(-50%)
			translateX(${(props) => (props.open ? "-150%" : "-140%")});
	}
`;

function DescList({ description, changeDescription }) {
	const [open, setOpen] = React.useState({
		exchange: false,
		quick: false,
		selection: false,
		insertion: false,
		merge: false,
		distribution: false,
		concurrent: false,
		miscellaneous: false,
		impractical: false,
	});

	const toggleOpen = (e) => {
		setOpen((prevOpen) => ({
			...prevOpen,
			[e.target.name]: !prevOpen[e.target.name],
		}));
	};

	const handleClick = (e) => {
		changeDescription(e.target.name);
	};

	return (
		<DescListStyled>
			<ul>
				<LiWithMarker
					open={open.exchange}
					className="li-subtitle"
					name="exchange"
				>
					<button
						onClick={toggleOpen}
						name="exchange"
						className="btn-subtitle"
					>
						EXCHANGE SORTS
					</button>
				</LiWithMarker>
				{open.exchange ? (
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "BubbleSort"
										? "active"
										: null
								}`}
								name={"BubbleSort"}
							>
								{deCamelCase("BubbleSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "BubbleSortOptimized"
										? "active"
										: null
								}`}
								name={"BubbleSortOptimized"}
							>
								{deCamelCase("BubbleSortOptimized")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "CocktailShakerSort"
										? "active"
										: null
								}`}
								name={"CocktailShakerSort"}
							>
								{deCamelCase("CocktailShakerSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "OddEvenSort"
										? "active"
										: null
								}`}
								name={"OddEvenSort"}
							>
								{deCamelCase("OddEvenSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "GnomeSort"
										? "active"
										: null
								}`}
								name={"GnomeSort"}
							>
								{deCamelCase("GnomeSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "GnomeSortOptimized"
										? "active"
										: null
								}`}
								name={"GnomeSortOptimized"}
							>
								{deCamelCase("GnomeSortOptimized")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "CombSort" ? "active" : null
								}`}
								name={"CombSort"}
							>
								{deCamelCase("CombSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "CircleSort"
										? "active"
										: null
								}`}
								name={"CircleSort"}
							>
								{deCamelCase("CircleSort")}
							</button>
						</li>
					</ul>
				) : null}
				<LiWithMarker
					open={open.quick}
					className="li-subtitle"
					name="quick"
				>
					<button
						onClick={toggleOpen}
						name="quick"
						className="btn-subtitle"
					>
						QUICK SORTS
					</button>
				</LiWithMarker>
				{open.quick ? (
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "QuickSortLeftPivot" ||
									description === "QuickSortMiddlePivot" ||
									description === "QuickSortRightPivot"
										? "active"
										: null
								}`}
								name={"QuickSortLeftPivot"}
							>
								{deCamelCase("QuickSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "QuickSortStable"
										? "active"
										: null
								}`}
								name={"QuickSortStable"}
							>
								{deCamelCase("QuickSortStable")}
							</button>
						</li>
					</ul>
				) : null}
				<LiWithMarker
					open={open.selection}
					className="li-subtitle"
					name="selection"
				>
					<button
						onClick={toggleOpen}
						name="selection"
						className="btn-subtitle"
					>
						SELECTION SORTS
					</button>
				</LiWithMarker>
				{open.selection ? (
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "SelectionSort"
										? "active"
										: null
								}`}
								name={"SelectionSort"}
							>
								{deCamelCase("SelectionSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "DoubleSelectionSort"
										? "active"
										: null
								}`}
								name={"DoubleSelectionSort"}
							>
								{deCamelCase("DoubleSelectionSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "CycleSort"
										? "active"
										: null
								}`}
								name={"CycleSort"}
							>
								{deCamelCase("CycleSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "HeapSortMin"
										? "active"
										: null
								}`}
								name={"HeapSortMin"}
							>
								{deCamelCase("HeapSortMin")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "HeapSortMax"
										? "active"
										: null
								}`}
								name={"HeapSortMax"}
							>
								{deCamelCase("HeapSortMax")}
							</button>
						</li>
					</ul>
				) : null}
				<LiWithMarker
					open={open.insertion}
					className="li-subtitle"
					name="insertion"
				>
					<button
						onClick={toggleOpen}
						name="insertion"
						className="btn-subtitle"
					>
						INSERTION SORTS
					</button>
				</LiWithMarker>
				{open.insertion ? (
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "InsertionSort"
										? "active"
										: null
								}`}
								name={"InsertionSort"}
							>
								{deCamelCase("InsertionSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "InsertionSortBinary"
										? "active"
										: null
								}`}
								name={"InsertionSortBinary"}
							>
								{deCamelCase("InsertionSortBinary")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "ShellSort"
										? "active"
										: null
								}`}
								name={"ShellSort"}
							>
								{deCamelCase("ShellSort")}
							</button>
						</li>
					</ul>
				) : null}
				<LiWithMarker
					open={open.merge}
					className="li-subtitle"
					name="merge"
				>
					<button
						onClick={toggleOpen}
						name="merge"
						className="btn-subtitle"
					>
						MERGE SORTS
					</button>
				</LiWithMarker>
				{open.merge ? (
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "MergeSort"
										? "active"
										: null
								}`}
								name={"MergeSort"}
							>
								{deCamelCase("MergeSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "MergeSortBottomUp"
										? "active"
										: null
								}`}
								name={"MergeSortBottomUp"}
							>
								{deCamelCase("MergeSortBottomUp")}
							</button>
						</li>
					</ul>
				) : null}
				<LiWithMarker
					open={open.distribution}
					className="li-subtitle"
					name="distribution"
				>
					<button
						onClick={toggleOpen}
						name="distribution"
						className="btn-subtitle"
					>
						DISTRIBUTION SORTS
					</button>
				</LiWithMarker>
				{open.distribution ? (
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "CountingSort"
										? "active"
										: null
								}`}
								name={"CountingSort"}
							>
								{deCamelCase("CountingSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "GravitySort"
										? "active"
										: null
								}`}
								name={"GravitySort"}
							>
								{deCamelCase("GravitySort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "BucketSort"
										? "active"
										: null
								}`}
								name={"BucketSort"}
							>
								{deCamelCase("BucketSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "FlashSort"
										? "active"
										: null
								}`}
								name={"FlashSort"}
							>
								{deCamelCase("FlashSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "RadixSortBase2" ||
									description === "RadixSortBase5" ||
									description === "RadixSortBase10"
										? "active"
										: null
								}`}
								name={"RadixSortBase2"}
							>
								{deCamelCase("RadixSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "RadixSortLSD"
										? "active"
										: null
								}`}
								name={"RadixSortLSD"}
							>
								{deCamelCase("RadixSortLSD")}
							</button>
						</li>
					</ul>
				) : null}
				<LiWithMarker
					open={open.concurrent}
					className="li-subtitle"
					name="concurrent"
				>
					<button
						onClick={toggleOpen}
						name="concurrent"
						className="btn-subtitle"
					>
						CONCURRENT SORTS
					</button>
				</LiWithMarker>
				{open.concurrent ? (
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "BitonicSort"
										? "active"
										: null
								}`}
								name={"BitonicSort"}
							>
								{deCamelCase("BitonicSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "OddEvenMergeSort"
										? "active"
										: null
								}`}
								name={"OddEvenMergeSort"}
							>
								{deCamelCase("OddEvenMergeSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "PairwiseSortingNetwork"
										? "active"
										: null
								}`}
								name={"PairwiseSortingNetwork"}
							>
								{deCamelCase("PairwiseSortingNetwork")}
							</button>
						</li>
					</ul>
				) : null}
				<LiWithMarker
					open={open.miscellaneous}
					className="li-subtitle"
					name="miscellaneous"
				>
					<button
						onClick={toggleOpen}
						name="miscellaneous"
						className="btn-subtitle"
					>
						MISCELLANEOUS SORTS
					</button>
				</LiWithMarker>
				{open.miscellaneous ? (
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "TimSort" ? "active" : null
								}`}
								name={"TimSort"}
							>
								{deCamelCase("TimSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "PancakeSort"
										? "active"
										: null
								}`}
								name={"PancakeSort"}
							>
								{deCamelCase("PancakeSort")}
							</button>
						</li>
					</ul>
				) : null}
				<LiWithMarker
					open={open.impractical}
					className="li-subtitle"
					name="impractical"
				>
					<button
						onClick={toggleOpen}
						name="impractical"
						className="btn-subtitle"
					>
						IMPRACTICAL SORTS
					</button>
				</LiWithMarker>
				{open.impractical ? (
					<ul>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "BogoSort" ? "active" : null
								}`}
								name={"BogoSort"}
							>
								{deCamelCase("BogoSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "BozoSort" ? "active" : null
								}`}
								name={"BozoSort"}
							>
								{deCamelCase("BozoSort")}
							</button>
						</li>
						<li>
							<button
								onClick={handleClick}
								className={`btn-desc-name ${
									description === "BubbleBogoSort"
										? "active"
										: null
								}`}
								name={"BubbleBogoSort"}
							>
								{deCamelCase("BubbleBogoSort")}
							</button>
						</li>
					</ul>
				) : null}
			</ul>
		</DescListStyled>
	);
}

const props = (state) => ({
	description: state.description,
});

const actions = (dispatch) => ({
	changeDescription: (name) => dispatch(doChangeDescription(name)),
});

export default connect(props, actions)(DescList);
