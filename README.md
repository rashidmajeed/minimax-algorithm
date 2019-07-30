# minimax-algorithm
Friend wanted to implement minimax algorithm, this is me looking at what it is.

minimax is type of backtracking algorithm

# backtracking
https://en.wikipedia.org/wiki/Backtracking

"Can be applied only for problems which admit the concept of a 'partial candidate solution'"
"Is a metaheuristic rather than specific algorithm"

# partial candidate solution
https://www.sciencedirect.com/topics/computer-science/candidate-partial-solution

"The local search process is started by selecting an initial candidate solution, and then proceeds by iteratively moving from one candidate solution to a neighbouring candidate solution"

General idea of what having a "partial candidate solution" means:

_"Say you have a large possible space of solutions to a problem, as you suggested. Suppose as well that solutions can be specified, built, or constructed a little bit at a time, incrementally. For example, a winning strategy for a game would technically be a complete data set or function which tells you what to do at time t=0, t=1, and so on up to the end of the game. Clearly there is a notion of "partial" solution here - it is possible to describe only the first ten moves of a proposed winning strategy. The example on the Wikipedia page involves placing eight queens on a chessboard such that no two can attack each other - again clearly one can start by placing six queens or four queens and then build up from there, as every final solution is the extension of (possibly many) of these partial solutions
The idea is that we may have easy tests for easily rejecting partial solutions that are obviously wrong or incorrect; and so at each step we throw away all of the partial solutions that fail and consider only the ones that could  at this point are possibly be extended further instead of the ones where we have transparently hit a dead end in the construction"_ - My Super Mathy Friend

# metahueristic algorithm
https://en.wikipedia.org/wiki/Metaheuristic

# on metaheuristic algorithms vs heuristic algorithms
https://stackoverflow.com/a/10485472
I find the concept of metaheuristic algorithms being problem-independent to be really interesting, one technique could be applied to more use cases maybe?



