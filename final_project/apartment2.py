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

master = assemblyDiagramInit([1,1,3])([[18.5],[15],[0.2,3,0.2]])
diagram1 = assemblyDiagramInit([14,20,3])([[1,1.5,0.5,3.5,0.5,1,0.5,0.5,0.5,1.5,4.5,0.5,1.5,1],[1,1,0.5,1,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1,0.5,1,0.5,0.5,0.5,2,1,1],[1,1,1]])
diagram2 = assemblyDiagramInit([3,3,1])([[6.5,3,9],[2.5,8,4.5],[1]])

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
 
master = diagram2cell(diagram1,master,1)
master = diagram2cell(diagram2,master,0)

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
VIEW(hpc)

emptyChain = [] 
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

#objExporter((verts,triangles), "../script/apartmentObj")
