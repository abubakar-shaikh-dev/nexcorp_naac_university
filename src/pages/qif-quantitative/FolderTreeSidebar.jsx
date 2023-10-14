import * as React from "react";
import { Box, Stack } from "@mui/material";
import {
  FolderIcon,
  FolderOpenIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import { styled } from "@mui/material/styles";

// Sub Pages
const Metric_1_1_3 = React.lazy(() => import("./sub-pages/Metric_1_1_3"));
const Metric_1_2_1 = React.lazy(() => import("./sub-pages/Metric_1_2_1"));
const Metric_1_2_2 = React.lazy(() => import("./sub-pages/Metric_1_2_2"));
const Metric_1_2_3 = React.lazy(() => import("./sub-pages/Metric_1_2_3"));
const Metric_1_3_2 = React.lazy(() => import("./sub-pages/Metric_1_3_2"));
const Metric_1_3_3 = React.lazy(() => import("./sub-pages/Metric_1_3_3"));
const Metric_1_4_1 = React.lazy(() => import("./sub-pages/Metric_1_4_1"));
const Metric_1_4_2 = React.lazy(() => import("./sub-pages/Metric_1_4_2"));
const Metric_2_1_1 = React.lazy(() => import("./sub-pages/Metric_2_1_1"));

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
      borderBottom: !rootnode ? `2px dashed ${borderColor}` : "none",
    },
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 16,
      paddingLeft: 18,
      borderLeft: `2px dashed ${borderColor}`,
    },
    [`& .${treeItemClasses.content}`]: {
      borderRadius: "5px",
    },
    "& .MuiTreeItem-label": {
      fontSize: 16,
    },
  };
});

const ShowTreeComponent = (props) => {
  const { children, activeTree, selectedTree } = props;

  return activeTree ? (
    <div hidden={activeTree[0] !== selectedTree}>
      <Box mx={2}>{children}</Box>
    </div>
  ) : null;
};

export default function FolderTreeSidebar(props) {
  // Tree Structure Initialization
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
    setExpanded((oldExpanded) => (oldExpanded.length === 0 ? arraySet : []));
  };

  const handleSelect = (event, selectedTree) => {
    const arraySet = getNodeIdsWithChildren(qif_quantitative_data);
    !arraySet.includes(selectedTree[0]) && setActiveTree(selectedTree);
  };

  return (
    <>
      <Box>
        <Stack spacing={3} direction="row">
          <Box width="17%" sx={{ position: "relative" }}>
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
                <StyledTreeItem
                  rootnode="true"
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
                </StyledTreeItem>
              ))}
            </TreeView>

            <Box sx={{ mt: 1 }}>
              <button
                className="flex justify-center text-sm items-center bg-gray-800 hover:bg-gray-900 hover:shadow-lg focus:bg-black text-white px-5 py-2 w-full rounded-md transition-all duration-150"
                onClick={handleExpandClick}
              >
                <span>
                  {expanded.length === 0 ? "Expand all" : "Collapse all"}
                </span>
              </button>
            </Box>
          </Box>
          <Box width="82%">
            <React.Suspense fallback={<div className="w-full flex justify-center mt-16">
            <img src="./assets/loader.gif" alt="loader" />
            </div>}>
              <ShowTreeComponent activeTree={activeTree} selectedTree="3">
                <Metric_1_1_3 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="5">
                <Metric_1_2_1 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="6">
                <Metric_1_2_2 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="7">
                <Metric_1_2_3 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="9">
                <Metric_1_3_2 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="10">
                <Metric_1_3_3 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="12">
                <Metric_1_4_1 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="13">
                <Metric_1_4_2 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="16">
                <Metric_2_1_1 />
              </ShowTreeComponent>
            </React.Suspense>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
