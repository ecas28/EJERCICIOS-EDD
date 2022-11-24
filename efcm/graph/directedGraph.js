class Graph {
    constructor(v){
     this.vertices = v;
     this.edges = 0;
     this.adj = [];
     for (var i = 0; i < this.vertices; ++i) {
     this.adj[i] = [];
     this.adj[i].push("");
     }
    }

     addEdge(v,w) {
     this.adj[v].push(w);
     this.edges++;
     }
     
      deletEdge(v,w) {
        this.adj[v].splice(this.adj[v].indexOf(w), 1)
      this.edges--;
     }
     search(v) {
        let filtro;
        for (var i = 0; i < this.vertices; ++i) {
            if (v == i) {
                filtro = this.adj.filter((e, i) => i == v)
                console.log('El vertice que buscas si existe y es el ' + i);
                filtro[0].splice(0, 1)
                console.log('Y tiene conexiones con los vertices ' + filtro);
                return
            }
        } console.log("Este vertice no existe")
    }

   showGraph() {
     for (var i = 0; i < this.vertices; ++i) {
     console.log(i + " -> ");
     for (var j = 0; j < this.vertices; ++j) {
     if (this.adj[i][j] != undefined)
     console.log(this.adj[i][j] + ' ');
     }
     console.log();
    }
     }
 }
export {Graph}