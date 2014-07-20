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
diagram1 = assemblyDiagramInit([2,1,1])([[2.5,16],[1],[1]])
diagram2 = assemblyDiagramInit([2,4,1])([[1,1.5],[2.5,1,10.5,1],[1]])
diagram3 = assemblyDiagramInit([1,1,2])([[1],[1],[1,2]])
diagram4 = assemblyDiagramInit([2,1,1])([[0.5,15.5],[1],[1]])
diagram5 = assemblyDiagramInit([1,8,1])([[1],[2.5,2,1,1.5,1,3,2,2],[1]])
diagram6 = assemblyDiagramInit([1,1,3])([[1],[1],[1,1,1]])
diagram7 = assemblyDiagramInit([1,1,2])([[1],[1],[2,1]])
diagram8 = assemblyDiagramInit([3,1,1])([[3.5,0.5,11.5],[1],[1]])
diagram9 = assemblyDiagramInit([1,8,1])([[1],[2.5,1,2.5,0.5,3,0.5,4,1],[1]])
diagram10 = assemblyDiagramInit([1,7,1])([[1],[4.5,1,3,1,0.5,1,4],[1]])
diagram11 = assemblyDiagramInit([1,2,1])([[1],[9.5,5.5],[1]])
diagram12 = assemblyDiagramInit([2,1,1])([[2.5,9],[1],[1]])
diagram13 = assemblyDiagramInit([2,3,1])([[2,0.5],[0.5,3,2],[1]])
diagram14 = assemblyDiagramInit([2,1,1])([[1,1],[1],[1]])
diagram15 = assemblyDiagramInit([1,2,1])([[1],[1,4.5],[1]])
diagram16 = assemblyDiagramInit([3,1,1])([[1.5,5,2.5],[1],[1]])
diagram17 = assemblyDiagramInit([2,1,1])([[9,2.5],[1],[1]])
diagram18 = assemblyDiagramInit([2,2,1])([[1.5,1],[1,8.5],[1]])
diagram19 = assemblyDiagramInit([2,1,1])([[8.5,1],[1],[1]])
diagram20 = assemblyDiagramInit([1,5,1])([[1],[2,2,2.5,2,1],[1]])
diagram21 = assemblyDiagramInit([1,4,1])([[1],[1,3,0.5,5],[1]])
diagram22 = assemblyDiagramInit([3,1,1])([[2,0.5,6],[1],[1]])
diagram23 = assemblyDiagramInit([1,3,1])([[1],[1.5,1,0.5],[1]])
diagram24 = assemblyDiagramInit([3,1,1])([[2.5,1,5],[1],[1]])
diagram25 = assemblyDiagramInit([4,4,1])([[1,0.5,1,6],[1,0.5,2.5,1],[1]])
diagram26 = assemblyDiagramInit([3,3,1])([[6.5,3,9],[2.5,8,4.5],[1]])

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
 
master = diagram2cell(diagram1,master,1)
master = diagram2cell(diagram2,master,2)
master = diagram2cell(diagram3,master,4)
master = diagram2cell(diagram3,master,4)
master = diagram2cell(diagram3,master,4)
master = diagram2cell(diagram3,master,5)
master = diagram2cell(diagram3,master,6)
master = diagram2cell(diagram4,master,2)
master = diagram2cell(diagram5,master,15)
master = diagram2cell(diagram6,master,18)
master = diagram2cell(diagram7,master,19)
master = diagram2cell(diagram7,master,20)
master = diagram2cell(diagram8,master,15)
master = diagram2cell(diagram9,master,27)
master = diagram2cell(diagram10,master,27)
master = diagram2cell(diagram7,master,37)
master = diagram2cell(diagram7,master,38)
master = diagram2cell(diagram7,master,39)
master = diagram2cell(diagram11,master,27)
master = diagram2cell(diagram12,master,46)
master = diagram2cell(diagram13,master,46)
master = diagram2cell(diagram14,master,47)
master = diagram2cell(diagram7,master,52)
master = diagram2cell(diagram15,master,46)
master = diagram2cell(diagram16,master,54)
master = diagram2cell(diagram7,master,55)
master = diagram2cell(diagram17,master,45)
master = diagram2cell(diagram18,master,59)
master = diagram2cell(diagram3,master,55)
master = diagram2cell(diagram3,master,58)
master = diagram2cell(diagram3,master,59)
master = diagram2cell(diagram3,master,59)
master = diagram2cell(diagram19,master,57)
master = diagram2cell(diagram20,master,67)
master = diagram2cell(diagram7,master,68)
master = diagram2cell(diagram7,master,69)
master = diagram2cell(diagram21,master,66)
master = diagram2cell(diagram22,master,74)
master = diagram2cell(diagram23,master,77)
master = diagram2cell(diagram7,master,79)
master = diagram2cell(diagram24,master,74)
master = diagram2cell(diagram7,master,82)
master = diagram2cell(diagram25,master,74)
master = diagram2cell(diagram26,master,0)


hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
VIEW(hpc)

emptyChain = [0,1,2,3,5,7,9,11,13,14,20,22,24,26,28,30,32,38,40,42,44,50,52,54,56,58,60,62,64,68,70,74,77,73,81,83,84,85,86,87,90,91,93,94,95,96,97,98,99,107] 
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

#objExporter((verts,triangles), "../script/apartmentObj")
