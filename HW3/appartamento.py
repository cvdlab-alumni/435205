""" boundary extraction of a block diagram """
from pyplasm import *
from scipy import *
import os,sys
sys.path.insert(0, '../HW3/lib/py/')
from lar2psm import *
from simplexn import *
from larcc import *
from largrid import *
from mapper import *
from boolean import *

from sysml import *
DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = assemblyDiagramInit([3,1,2])([[4,9,13],[20],[.1,4]])
diagram1 = assemblyDiagramInit([3,3,1])([[1,2,1],[1,18,1],[1]])
diagram2 = assemblyDiagramInit([5,7,1])([[1,4,1,2,1],[1,6,1,7,1,3,1],[1]])
diagram3 = assemblyDiagramInit([1,3,1])([[12],[15,1,4],[1]])
diagram4 = assemblyDiagramInit([4,2,1])([[9,1,2,1],[1,14],[1]])
diagram5 = assemblyDiagramInit([1,3,2])([[9],[6,1,7],[.1,4]])

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
 
master = diagram2cell(diagram1,master,0)
master = diagram2cell(diagram2,master,1)
master = diagram2cell(diagram3,master,2)
master = diagram2cell(diagram4,master,47)
master = diagram2cell(diagram5,master,50)

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
VIEW(hpc)

emptyChain = [17,13,32,36,52,58,65]
solidCV = [cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
#DRAW((master[0],solidCV))

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

