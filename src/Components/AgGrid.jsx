'use client';

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

ModuleRegistry.registerModules([AllCommunityModule]);

// Create new GridExample component
const AgGrid = ({ rowData, colDefs, defaultColDef }) => {


	// Container: Defines the grid's theme & dimensions.
	return (
		<div className="h-100">
			<AgGridReact
				rowData={rowData}
				columnDefs={colDefs}
				defaultColDef={defaultColDef}
			/>
		</div>
	);
};

export default AgGrid;
