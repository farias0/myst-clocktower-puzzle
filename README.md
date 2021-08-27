An attempt at bruteforcing the clocktower puzzle on Myst -- but, in the end, the puzzle is unsolvable this way

In it you have three gears with positions 1 to 3, and two levers. The first lever adds 1 (mod 3) to the first 2 gears. The second lever adds 1 to the bottom two gears. It starts at (3, 3, 3) and the desired state is (2, 2, 1)

The abstraction here is a graph. Each state is a node, and each lever pull is an edge. In other words, each node can move to two other possible nodes. This code uses a binary tree-like system + a stack to try to bruteforce a path from (3, 3, 3) to (2, 2, 1)

In the end there are at least two graphs in this space, one containing the initial state and the other the final one. Therefore this code runs to completion without ever finding a path to (2, 2, 1). If you change the initial state to one present in the second graph (i.e., to 3, 2, 3) you can easily find the final state. So unless you can change the value of the second gear independently, it's impossible to solve this puzzle

Eventually I discovered there's a different solution to it