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
import SpinnerSVG from "../../components/SpinnerSVG";

// Sub Pages
const Metric_1_1_1 = React.lazy(() => import("./sub-pages/Metric_1_1_1"));
const Metric_1_1_2 = React.lazy(() => import("./sub-pages/Metric_1_1_2"));
const Metric_1_3_1 = React.lazy(() => import("./sub-pages/Metric_1_3_1"));
const Metric_2_2_1 = React.lazy(() => import("./sub-pages/Metric_2_2_1"));
const Metric_2_3_1 = React.lazy(() => import("./sub-pages/Metric_2_3_1"));
const Metric_2_3_2 = React.lazy(() => import("./sub-pages/Metric_2_3_2"));
const Metric_2_5_1 = React.lazy(() => import("./sub-pages/Metric_2_5_1"));
const Metric_2_5_2 = React.lazy(() => import("./sub-pages/Metric_2_5_2"));
const Metric_2_6_1 = React.lazy(() => import("./sub-pages/Metric_2_6_1"));
const Metric_2_6_2 = React.lazy(() => import("./sub-pages/Metric_2_6_2"));
const Metric_3_2_1 = React.lazy(() => import("./sub-pages/Metric_3_2_1"));
const Metric_3_4_1 = React.lazy(() => import("./sub-pages/Metric_3_4_1"));
const Metric_4_1_1 = React.lazy(() => import("./sub-pages/Metric_4_1_1"));
const Metric_4_1_2 = React.lazy(() => import("./sub-pages/Metric_4_1_2"));
const Metric_4_2_1 = React.lazy(() => import("./sub-pages/Metric_4_2_1"));
const Metric_4_3_1 = React.lazy(() => import("./sub-pages/Metric_4_3_1"));
const Metric_4_4_2 = React.lazy(() => import("./sub-pages/Metric_4_4_2"));
const Metric_5_3_2 = React.lazy(() => import("./sub-pages/Metric_5_3_2"));
const Metric_5_4_1 = React.lazy(() => import("./sub-pages/Metric_5_4_1"));
const Metric_6_1_1 = React.lazy(() => import("./sub-pages/Metric_6_1_1"));
const Metric_6_1_2 = React.lazy(() => import("./sub-pages/Metric_6_1_2"));
const Metric_6_2_1 = React.lazy(() => import("./sub-pages/Metric_6_2_1"));
const Metric_6_2_2 = React.lazy(() => import("./sub-pages/Metric_6_2_2"));
const Metric_6_3_1 = React.lazy(() => import("./sub-pages/Metric_6_3_1"));
const Metric_6_3_5 = React.lazy(() => import("./sub-pages/Metric_6_3_5"));
const Metric_6_4_1 = React.lazy(() => import("./sub-pages/Metric_6_4_1"));
const Metric_6_4_3 = React.lazy(() => import("./sub-pages/Metric_6_4_3"));
const Metric_6_5_1 = React.lazy(() => import("./sub-pages/Metric_6_5_1"));
const Metric_6_5_2 = React.lazy(() => import("./sub-pages/Metric_6_5_2"));
const Metric_7_1_1 = React.lazy(() => import("./sub-pages/Metric_7_1_1"));
const Metric_7_1_3 = React.lazy(() => import("./sub-pages/Metric_7_1_3"));
const Metric_7_1_8 = React.lazy(() => import("./sub-pages/Metric_7_1_8"));
const Metric_7_1_9 = React.lazy(() => import("./sub-pages/Metric_7_1_9"));
const Metric_7_1_11 = React.lazy(() => import("./sub-pages/Metric_7_1_11"));
const Metric_7_2_1 = React.lazy(() => import("./sub-pages/Metric_7_2_1"));
const Metric_7_3_1 = React.lazy(() => import("./sub-pages/Metric_7_3_1"));

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
  const qif_qualitative_data = props.data;

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
    const arraySet = getNodeIdsWithChildren(qif_qualitative_data);
    setExpanded((oldExpanded) => (oldExpanded.length === 0 ? arraySet : []));
  };

  const handleSelect = (event, selectedTree) => {
    const arraySet = getNodeIdsWithChildren(qif_qualitative_data);
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
              {qif_qualitative_data.map((folder, index) => (
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
              <span className="text-lg">Please Wait...</span>
            </div>}>
              <ShowTreeComponent activeTree={activeTree} selectedTree="3">
                <Metric_1_1_1 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="4">
                <Metric_1_1_2 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="6">
                <Metric_1_3_1 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="9">
                <Metric_2_2_1 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="11">
                <Metric_2_3_1 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="12">
                <Metric_2_3_2 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="14">
                <Metric_2_5_1 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="15">
                <Metric_2_5_2 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="17">
                <Metric_2_6_1 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="18">
                <Metric_2_6_2 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="21">
                <Metric_3_2_1 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="23">
                <Metric_3_4_1 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="26">
                <Metric_4_1_1 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="27">
                <Metric_4_1_2 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="29">
                <Metric_4_2_1 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="31">
                <Metric_4_3_1 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="33">
                <Metric_4_4_2 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="36">
                <Metric_5_3_2 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="38">
                <Metric_5_4_1 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="41">
                <Metric_6_1_1 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="42">
                <Metric_6_1_2 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="44">
                <Metric_6_2_1 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="45">
                <Metric_6_2_2 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="47">
                <Metric_6_3_1 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="48">
                <Metric_6_3_5 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="50">
                <Metric_6_4_1 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="51">
                <Metric_6_4_3 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="53">
                <Metric_6_5_1 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="54">
                <Metric_6_5_2 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="57">
                <Metric_7_1_1 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="58">
                <Metric_7_1_3 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="59">
                <Metric_7_1_8 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="60">
                <Metric_7_1_9 />
              </ShowTreeComponent>
              <ShowTreeComponent activeTree={activeTree} selectedTree="61">
                <Metric_7_1_11 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="63">
                <Metric_7_2_1 />
              </ShowTreeComponent>

              <ShowTreeComponent activeTree={activeTree} selectedTree="65">
                <Metric_7_3_1 />
              </ShowTreeComponent>
            </React.Suspense>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
