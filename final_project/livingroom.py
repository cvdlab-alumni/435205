""" boundary extraction of a block diagram """
from pyplasm import *
from scipy import *
import os,sys
sys.path.insert(0, '../script/lib/py/')
from lar2psm import *
from simplexn import *
from larcc import *
from largrid import *
from mapper import *
from boolean import *

from sysml import *

def objExporter((V,FV), filePath):
    out_file = open(filePath,"w")
    out_file.write("# List of Vertices:\n")
    for v in V:
        out_file.write("v")
        for c in v:
            out_file.write(" " + str(c))
        out_file.write("\n")
    out_file.write("# Face Definitions:\n")
    for f in FV:
        out_file.write("f")
        for v in f:
            out_file.write(" " + str(v+1))
        out_file.write("\n")
    out_file.close()

DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = assemblyDiagramInit([1,1,3])([[9],[6.25],[0.2,3,0.2]])
diagram1 = assemblyDiagramInit([2,2,1])([[2.75,6.25],[5.5,0.75],[1]])
diagram2 = assemblyDiagramInit([4,3,1])([[0.25,2.5,6,0.25],[0.25,5,1],[1]])
diagram3 = assemblyDiagramInit([1,2,1])([[1],[0.25,0.75],[1]])
diagram4 = assemblyDiagramInit([2,1,1])([[1,5],[1],[1]])
diagram5 = assemblyDiagramInit([2,1,1])([[1.5,4.5],[1],[1]])
diagram6 = assemblyDiagramInit([1,3,1])([[1],[2,2,1],[1]])
diagram7 = assemblyDiagramInit([2,1,1])([[1,1.5],[1],[1]])
diagram8 = assemblyDiagramInit([3,4,1])([[1,0.5,1],[1,0.5,2.5,1],[1]])
diagram9 = assemblyDiagramInit([1,1,2])([[1],[1],[2,1]])
diagram10 = assemblyDiagramInit([1,3,1])([[1],[1,3,1],[1]])

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

master = diagram2cell(diagram1,master,0)
master = diagram2cell(diagram2,master,0)
master = diagram2cell(diagram3,master,10)
master = diagram2cell(diagram4,master,10)
master = diagram2cell(diagram5,master,11)
master = diagram2cell(diagram6,master,12)
master = diagram2cell(diagram7,master,13)
master = diagram2cell(diagram8,master,9)
master = diagram2cell(diagram9,master,13)
master = diagram2cell(diagram9,master,14)
master = diagram2cell(diagram9,master,16)
master = diagram2cell(diagram9,master,17)
master = diagram2cell(diagram3,master,7)
master = diagram2cell(diagram10,master,6)
master = diagram2cell(diagram9,master,38)
master = diagram2cell(diagram9,master,39)

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
VIEW(hpc)

emptyChain = [0,2,7,10,16,17,18,19,20,23,24,26,27,28,30,32,34,37,39,41] 
solidCV = [cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
DRAW((master[0],solidCV))

exteriorCV =  [cell for k,cell in enumerate(master[1]) if k in emptyChain]
exteriorCV += exteriorCells(master)
CV = solidCV + exteriorCV
V = master[0]
FV = [f for f in larFacets((V,CV),3,len(exteriorCV))[1] if len(f) >= 4]
#VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS((V,FV))))

BF = boundaryCells(solidCV,FV)
boundaryFaces = [FV[face] for face in BF]
B_Rep = V,boundaryFaces
#VIEW(EXPLODE(1.1,1.1,1.1)(MKPOLS(B_Rep)))
#VIEW(STRUCT(MKPOLS(B_Rep)))

verts, triangles = quads2tria(B_Rep)
B_Rep = V,boundaryFaces
#VIEW(EXPLODE(1.1,1.1,1.1)(MKPOLS((verts, triangles))))
#VIEW(STRUCT(MKPOLS((verts, triangles))))

DRAW([verts,triangles])

objExporter((verts,triangles), "../script/livingroom.obj")
