/*针对树形数据类型，根据key和value查找节点并返回*/
function findNodeById(nodes, key, value) {
    //检查整个数组
    var found = ifFound(nodes, key, value);
    if (found !== false) {
        return found;
    }
    //所有children, 没有看各个children的children
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].children && nodes[i].children.length > 0) {
            var childNodes = nodes[i].children;
            var foundInChild = findNodeById(childNodes, key, value);
            if (foundInChild !== false) {
                return foundInChild;
            }
        }
    }
    return false;
}

function ifFound(data, key, value) {
    var found = false;
    for (var i = 0; i < data.length; i++) {
        if (data[i][key] === value) {
            found = data[i];
            break;
        }
    }
    return found;
}
