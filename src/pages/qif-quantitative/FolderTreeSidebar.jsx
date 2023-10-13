import * as React from "react";
import {Box,Stack} from "@mui/material";
import {
  FolderIcon,
  FolderOpenIcon,
  DocumentTextIcon,
  ArrowPathIcon
} from "@heroicons/react/24/outline";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem,treeItemClasses } from "@mui/x-tree-view/TreeItem";
import { styled } from "@mui/material/styles";

//Sub Pages


const StyledTreeItem = styled(TreeItem)(({ rootnode }) => {
  const borderColor = "#c7c7c7";

  return {
    position: "relative",
    "&:before": {
      pointerEvents: "none",
      content: '""',
      position: "absolute",
      width: 19,
      left: -18,
      top: 12,
      borderBottom:
        // only display if the TreeItem is not root node
        !rootnode ? `2px dashed ${borderColor}` : "none"
    },
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 16,
      paddingLeft: 18,
      borderLeft: `2px dashed ${borderColor}`
    },
    [`& .${treeItemClasses.content}`]: {
      borderRadius:'5px'
    },
    "& .MuiTreeItem-label": {
      fontSize: 16,
    }
  };
});

const ShowTreeComponent = (props) => {
  const { children, activeTree, selectedTree } = props;
  
  return activeTree ?  (
    <div hidden={activeTree[0] !== selectedTree}>
      <Box mx={2}>{children}</Box>
    </div>
  ):null;
};

export default function FolderTreeSidebar(props) {
  //Tree Structure Initialization
  const qif_quantitative_data = props.data;

  const [expanded, setExpanded] = React.useState([]);
  const [activeTree, setActiveTree] = React.useState();

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  function getNodeIdsWithChildren(data) {
    const result = [];

    function extractNodeIds(nodeData) {
      for (const node of nodeData) {
        if (node.children && node.children.length > 0) {
          result.push(node.nodeId);
          extractNodeIds(node.children);
        }
      }
    }

    extractNodeIds(data);

    return result;
  }

  const handleExpandClick = () => {
    const arraySet = getNodeIdsWithChildren(qif_quantitative_data);
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0
        ? arraySet
        : []
    );
  };

  const handleSelect = (event, selectedTree) => {
    const arraySet = getNodeIdsWithChildren(qif_quantitative_data);
    !arraySet.includes(selectedTree[0]) && setActiveTree(selectedTree);
  };


  return (
    <>
      
      <Box>
        <Stack spacing={3} direction="row">
          <Box width="17%" sx={{position:'relative'}}>

            {/* LOADER START */}
            {/* <div className=" select-none flex cursor-wait justify-center items-center absolute bg-black/30 w-full h-full top-0 backdrop-blur-sm z-50 rounded-[5px]">
              <ArrowPathIcon className="h-10 w-10 text-white font-semibold animate-spin cursor-wait" />
            </div> */}
            {/* LOADER END */}

            <TreeView
              sx={{
                p: 1,
                border: 2,
                borderColor: "#eee",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
              aria-label="controlled"
              defaultCollapseIcon={<FolderOpenIcon />}
              defaultExpandIcon={<FolderIcon />}
              expanded={expanded}
              onNodeToggle={handleToggle}
              defaultEndIcon={<DocumentTextIcon />}
              onNodeSelect={handleSelect}
              multiSelect
            >
              {qif_quantitative_data.map((folder, index) => (
                <>

                {folder.children ? (<StyledTreeItem
                  rootnode='true'
                  nodeId={folder.nodeId}
                  label={folder.label}
                  key={index}
                >
                  {folder.children.map((sub_folder, index2) => (
                    <StyledTreeItem
                      nodeId={sub_folder.nodeId}
                      label={sub_folder.label}
                      key={index2}
                    >
                      {sub_folder.children.map((file, index3) => (
                        <StyledTreeItem
                          nodeId={file.nodeId}
                          label={file.label}
                          key={index3}
                        />
                      ))}
                    </StyledTreeItem>
                  ))}
                </StyledTreeItem>):(<StyledTreeItem
                  rootnode='true'
                  nodeId={folder.nodeId}
                  label={folder.label}
                  key={index}
                ></StyledTreeItem>)}
                
                
                </>
              ))}
            </TreeView>
            
            <Box sx={{ mt: 1 }}>
              
              <button
                className="flex justify-center text-sm items-center bg-gray-800 hover:bg-gray-900 hover:shadow-lg focus:bg-black text-white px-5 py-2 w-full rounded-md transition-all duration-150"
                onClick={handleExpandClick}
              >
                <span>{expanded.length === 0 ? "Expand all" : "Collapse all"}</span>
              </button>
            </Box>
          </Box>
          
        </Stack>
      </Box>
    </>
  );
}
