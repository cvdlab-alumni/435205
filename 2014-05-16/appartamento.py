""" boundary extraction of a block diagram """
from pyplasm import *
from scipy import *
import os,sys
sys.path.insert(0, '../2014-05-16/lib/py/')
from lar2psm import *
from simplexn import *
from larcc import *
from largrid import *
from mapper import *
from boolean import *

from sysml import *
DRAW = COMP([VIEW,STRUCT,MKPOLS])

#MURI

master = assemblyDiagramInit([3,1,2])([[4,9,13],[25],[.1,4]])
diagram1 = assemblyDiagramInit([3,3,1])([[1,2.5,0.5],[1,23,1],[1]])
diagram2 = assemblyDiagramInit([4,7,1])([[5.5,0.5,2.5,0.5],[1,6,0.6,7.5,0.5,8.5,1],[1]])
diagram3 = assemblyDiagramInit([1,3,1])([[12],[15,1,4],[1]])
diagram4 = assemblyDiagramInit([4,2,1])([[9.5,0.5,2,1],[1,14],[1]])
diagram5 = assemblyDiagramInit([1,3,1])([[9],[6,0.5,7.5],[1]])
diagram6 = assemblyDiagramInit([3,1,1])([[2.5,0.5,6],[1],[1]])

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

#VIEW(hpc)
 
master = diagram2cell(diagram1,master,1)
master = diagram2cell(diagram2,master,2)
master = diagram2cell(diagram3,master,3)
master = diagram2cell(diagram4,master,40)
master = diagram2cell(diagram5,master,43)
master = diagram2cell(diagram6,master,49)

#PORTE E FINESTRE
diagram7 = assemblyDiagramInit([1,5,2])([[1],[2,2,6,2,2],[3,1]])
diagram8 = assemblyDiagramInit([3,1,2])([[4,1,4],[1],[3,1]])
diagram9 = assemblyDiagramInit([1,3,2])([[1],[4,1,1],[3,1]])
diagram10 = assemblyDiagramInit([3,1,2])([[0.5,1,0.5],[1],[3,1]])
diagram11 = assemblyDiagramInit([3,1,2])([[2,1,2],[1],[3,1]])
diagram12 = assemblyDiagramInit([1,5,2])([[1],[10,1,6,2,4],[3,1]])
diagram13 = assemblyDiagramInit([1,3,2])([[1],[0.5,1,6.5],[3,1]])
diagram14 = assemblyDiagramInit([3,1,2])([[0.5,1,0.5],[1],[3,1]])
diagram15 = assemblyDiagramInit([1,3,2])([[1],[5,1,1],[3,1]])
diagram16 = assemblyDiagramInit([3,1,2])([[1,1.5,10.5],[1],[3,1]])

master = diagram2cell(diagram7,master,44)
master = diagram2cell(diagram8,master,48)
master = diagram2cell(diagram9,master,50)
master = diagram2cell(diagram10,master,28)
master = diagram2cell(diagram11,master,14)
master = diagram2cell(diagram12,master,10)
master = diagram2cell(diagram13,master,22)
master = diagram2cell(diagram14,master,26)
master = diagram2cell(diagram15,master,20)
master = diagram2cell(diagram15,master,30)
master = diagram2cell(diagram16,master,33)

#RIFINITURE

diagram16 = assemblyDiagramInit([1,2,1])([[1],[20,5],[1]])

master = diagram2cell(diagram16,master,2)


hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
VIEW(hpc)

emptyList = [7,12,13,15,18,23,24,25,33,37,40,41,42,45,49,55,61,67,79,83,89,95,101,107,113]

emptyChain = [6,11,12,14,17,22,23,24,32,36,39,40,41,44,48,54,60,66,78,82,88,94,100,106,112,117] 
solidCV = [cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
DRAW((master[0],solidCV))
master = master[0],solidCV
apartment = STRUCT(MKPOLS(master));

rotation = R([1,2]) (PI)
apartment2 = STRUCT([rotation,apartment])
traslation = T(2) (25)
apartment2 = STRUCT([traslation,apartment2])

floor = STRUCT([apartment,apartment2])
traslation = T(3) (4)
floor2 = STRUCT(NN(8)([traslation,floor]))
apartmentFinal = STRUCT([floor,floor2])

VIEW(apartmentFinal)

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

v,CV = master
#VIEW(EXPLODE(1.3,1.3,1.3)(MKPOLS((V,CV))))

