let root = {
    id: 'b',
    children: [{
        id: 'b',
        children: [{
            id: 'b',
            children: [{
                id: 'b',
                children: [{
                    id: 'a1',
                    children: []
                }, {
                    id: 'a2',
                    children: []
                }, {
                    id: 'a3',
                    children: []
                }, {
                    id: 'a4',
                    children: []
                }, {
                    id: 'a5',
                    children: []
                },]
            }]
        },]
    }, {
        id: 'b',
        children: [{
            id: 'b',
            children: [{
                id: 'b',
                children: [{
                    id: 'c1',
                    children: []
                }, {
                    id: 'c2',
                    children: []
                }, {
                    id: 'c3',
                    children: []
                }, {
                    id: 'c4',
                    children: []
                }, {
                    id: 'c5',
                    children: []
                }]
            }]
        }]
    }]
}
function search(root, depth, pattern) {
    let match = new RegExp(pattern);
    let result = [];
    function dfs(level, node) {
        if (level > depth) {
            return;
        }
        if (level === depth && match.test(node.id)) {
            result.push(node);
        }
        for (let i = 0; i < node.children.length; i++) {
            if (result.length > 0) break;
            dfs(level + 1, node.children[i]);
        }
    }
    dfs(1, root);
    return result;
}
let result = search(root, 5, '1');
console.log(JSON.stringify(result));
