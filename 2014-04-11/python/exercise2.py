from pyplasm import *
from mapper import *

# definisco i punti che ci serviranno per le 3 piante principali del grattacielo.

a1 = [0,0]
a2 = [25,0]
a3 = [25,21]
a4 = [0,21]

b1 = [0,2]
b2 = [25,2]
b3 = [25,19]
b4 = [0,19]

c1 = [0,4]
c2 = [25,4]
c3 = [25,17]
c4 = [0,17]

#definisco gli insiemi dei vertici delle 3 basi
verticiA = [a1,a2,a3,a4]
verticiB = [b1,b2,b3,b4]
verticiC = [c1,c2,c3,c4]

#definisco le celle
celleA = [range(1,5)]
celleB = [range(1,5)]
celleC = [range(1,5)]

#definisco le basi
#A: 51x43 / B & C : 41x33
baseA = MKPOL([verticiA,celleA,None])
baseB = MKPOL([verticiB,celleB,None])
baseC = MKPOL([verticiC,celleC,None])

#traslo i piani, posizionandoli uno sull'altro
traslazionePiano = T(3)(1)
traslazioneB = T(3)(4)
traslazioneC = T(3)(10)
baseBSpostata = STRUCT([traslazioneB,baseB])
baseCSpostata = STRUCT([traslazioneC,baseC])
pianiA = STRUCT(NN(3)([traslazionePiano,baseA]))
pianiB = STRUCT(NN(5)([traslazionePiano,baseBSpostata]))
pianiC = STRUCT(NN(37)([traslazionePiano,baseCSpostata]))

#unisco tutti i piani
piani = STRUCT([pianiA, pianiB, pianiC])

#**************************************************************************************

#Ci sono 2 lati di base del grattacielo (uno nord/sud e l'altro est/ovest)
#Iniziamo definendo i vertici della facciata A

d1 = [0,0]
d2 = [10,0]
d3 = [10,3]
d4 = [0,3]
d5 = [11,0]
d6 = [21,0]
d7 = [21,3]
d8 = [10,3]

e1 = [2,3]
e2 = [10,9]
e3 = [2,9]
e4 = [19,3]
e5 = [19,9]
e6 = [10,9]

f1 = [4,9]
f2 = [10,38.5]
f3 = [4,38.5]
f4 = [17,9]
f5 = [17,38.5]
f6 = [10,38.5]

g1 = [8,9]
g2 = [8,38.5]
g3 = [13,9]
g4 = [13,38.5]

h1 = [6,9]
h2 = [8,43]
h3 = [6,43]
h4 = [15,9]
h5 = [15,43]
h6 = [13,43]

i1 = [4.5,45.5]
i2 = [5.5,45.5]
i3 = [4.5,46.5]
i4 = [5.5,46.5]
i5 = [6.5,43.5]
i6 = [7.5,43.5]
i7 = [6.5,44.5]
i8 = [7.5,44.5]
i9 = [15.5,45.5]
i10 = [16.5,45.5]
i11 = [15.5,46.5]
i12 = [16.5,46.5]
i13 = [13.5,43.5]
i14 = [14.5,43.5]
i15 = [13.5,44.5]
i16 = [14.5,44.5]

j1 = [6,45]
j2 = [4,45]
j3 = [17,45]
j4 = [15,45]

k1 = [8,45]
k2 = [6,47]
k3 = [4,47]
k4 = [13,45]
k5 = [15,47]
k6 = [17,47]

l1 = [10,57]
l2 = [11,57] 

m1 = [9,57]
m2 = [10,57]
m3 = [10,58]
m4 = [9,58]
m5 = [11,57]
m6 = [12,57]
m7 = [12,58]
m8 = [11,58]

#definisco gli insiemi dei vertici della facciata A
verticiD = [d1,d4,d6,d7]
verticiE = [e1,e3,e4,e5]
verticiF1 = [f1,h1,j1,j2]
verticiF2 = [f4,h4,j3,j4]
verticiG1 = [g1,g2,e2,f2]
verticiG2 = [g3,g4,f3,e6]
verticiH1 = [h1,h2,h3,g1]
verticiH2 = [h4,h5,h6,g3]

verticiI1 = [i1,i2,i3,i4]
verticiI2 = [i5,i6,i7,i8]
verticiI3 = [i9,i10,i11,i12]
verticiI4 = [i13,i14,i15,i16]

verticiJ = [f1,f4,k3,k6,m1,m6]

verticiK1 = [k2,k3,j1,j2]
verticiK2 = [j1,k1,h2,h3]
verticiK3 = [k4,j4,h5,h6]
verticiK4 = [k5,k6,j3,j4]

verticiL = [f2,f6,l1,l2]
verticiM1 = [m1,m2,m3,m4]
verticiM2 = [m5,m6,m7,m8]


#definisco le celle
celle = [range(1,5)]
celleJ = [range(1,7)]

#definisco la facciata A in tutti i suoi pezzi
figuraD = MKPOL([verticiD,celle,None])
figuraE = MKPOL([verticiE,celle,None])
figuraF1 = MKPOL([verticiF1,celle,None])
figuraF2 = MKPOL([verticiF2,celle,None])
figuraG1 = MKPOL([verticiG1,celle,None])
figuraG2 = MKPOL([verticiG2,celle,None])
figuraH1 = MKPOL([verticiH1,celle,None])
figuraH2 = MKPOL([verticiH2,celle,None])
figuraI1 = MKPOL([verticiI1,celle,None])
figuraI2 = MKPOL([verticiI2,celle,None])
figuraI3 = MKPOL([verticiI3,celle,None])
figuraI4 = MKPOL([verticiI4,celle,None])
figuraJ = MKPOL([verticiJ,celleJ,None])
figuraK1 = MKPOL([verticiK1,celle,None])
figuraK2 = MKPOL([verticiK2,celle,None])
figuraK3 = MKPOL([verticiK3,celle,None])
figuraK4 = MKPOL([verticiK4,celle,None])
figuraL = MKPOL([verticiL,celle,None])
figuraM1 = MKPOL([verticiM1,celle,None])
figuraM2 = MKPOL([verticiM2,celle,None])

figuraI = STRUCT([figuraI1,figuraI2,figuraI3,figuraI4])

facciataA = STRUCT([figuraD, figuraE, figuraF1, figuraF2, figuraG1, figuraG2, figuraH1, figuraH2, figuraI, figuraJ, figuraK1, figuraK2, figuraK3, figuraK4, figuraL, figuraM1, figuraM2])
facciataA = PROD([facciataA, Q(25)])

rotazioneFacciata = R([2,3]) (PI/2)
facciataARuotata = STRUCT([rotazioneFacciata, facciataA])
rotazioneFacciata = R([1,2]) (PI/2)
facciateA = STRUCT([rotazioneFacciata, facciataARuotata])





#duplico la facciata A (Nord & Sud)

#Ora definendo i vertici della facciata B
n1 = [0,0]
n2 = [25,0]
n3 = [25,3]
n4 = [0,3]

o1 = [0,3]
o2 = [25,3]
o3 = [25,9]
o4 = [0,9]

p1 = [0,9]
p2 = [25,9]
p3 = [25,47]
p4 = [0,47]

#definisco gli insiemi dei vertici della facciata B
verticiN = [n1,n2,n3,n4]
verticiO = [o1,o2,o3,o4]
verticiP = [p1,p2,p3,p4]

#definisco la facciata B in tutti i suoi pezzi
figuraN = MKPOL([verticiN,celle,None])
figuraO = MKPOL([verticiO,celle,None])
figuraP = MKPOL([verticiP,celle,None])

traslazioneFacciata = T(3)(21)
figuraN2 = STRUCT([traslazioneFacciata,figuraN])

traslazioneFacciata = T(3)(-2)
figuraOSpostata = STRUCT([traslazioneFacciata, figuraO])

traslazioneFacciata = T(3)(21)
figuraO2 = STRUCT([traslazioneFacciata,figuraOSpostata])

traslazioneFacciata = T(3)(-4)
figuraPSpostata = STRUCT([traslazioneFacciata, figuraP])

traslazioneFacciata = T(3)(21)
figuraP2 = STRUCT([traslazioneFacciata,figuraPSpostata])

facciataB = STRUCT([figuraN,figuraOSpostata,figuraPSpostata])
rotazioneFacciata = R([2,3]) (PI/2)
facciataBRuotata = STRUCT([rotazioneFacciata, facciataB])

facciataBSpostata = STRUCT([figuraN2,figuraO2,figuraP2])
rotazioneFacciata = R([2,3]) (PI/2)
facciataBSpostata = STRUCT([rotazioneFacciata, facciataBSpostata])
rotazioneFacciata = R([1,2]) (PI)
facciataBSpostata = STRUCT([rotazioneFacciata, facciataBSpostata])
traslazioneFacciata = T(1) (25)
facciataBSpostata = STRUCT([traslazioneFacciata, facciataBSpostata])


facciateB = STRUCT([facciataBRuotata,facciataBSpostata])

figura = STRUCT([facciateA, facciateB, piani])

#**************************************************************************************

#Griglia Finestre
cornice = CUBOID([2,1])
finestra = CUBOID([0.5,0.5])
traslazioneFinestra = T(1) (0.25)
finestra1 = STRUCT([traslazioneFinestra,finestra])
traslazioneFinestra = T(2) (0.25)
finestra1 = STRUCT([traslazioneFinestra,finestra1])
traslazioneFinestra = T(1) (1)
finestra2 = STRUCT([traslazioneFinestra,finestra1])
finestre = STRUCT([finestra1,finestra2])

corniceConFinestre = DIFFERENCE([cornice,finestre])
baseGriglia = PROD([corniceConFinestre,Q(0.3)])

traslazioneGriglia = T(2) (1)
pezzo = STRUCT(NN(2)([traslazioneGriglia, baseGriglia]))
griglia = STRUCT([baseGriglia,pezzo])
traslazioneGriglia = T(1) (2)
pezzo = STRUCT(NN(4)([traslazioneGriglia, griglia]))
griglia = STRUCT([griglia,pezzo])
traslazioneGriglia = T(1) (2)
pezzo = STRUCT([traslazioneGriglia, baseGriglia])
traslazioneGriglia = T(2) (3)
pezzo = STRUCT([traslazioneGriglia, pezzo])
traslazioneGriglia = T(1) (2)
pezzoSpostato = STRUCT(NN(3)([traslazioneGriglia, pezzo]))
pezzo = STRUCT([pezzo, pezzoSpostato])
griglia = STRUCT([griglia,pezzo])
traslazioneGriglia = T(2) (1)
pezzo = STRUCT(NN(5)([traslazioneGriglia, pezzo]))
griglia = STRUCT([griglia,pezzo])
traslazioneGriglia = T(2) (8)
pezzo = STRUCT([traslazioneGriglia, baseGriglia])
traslazioneGriglia = T(1) (4)
pezzo = STRUCT([traslazioneGriglia, pezzo])
traslazioneGriglia = T(2) (1)
pezzo = STRUCT(NN(29)([traslazioneGriglia, pezzo]))
griglia = STRUCT([griglia,pezzo])
traslazioneGriglia = T(1) (2)
pezzo = STRUCT(NN(2)([traslazioneGriglia, pezzo]))
griglia = STRUCT([griglia,pezzo])
traslazioneGriglia = T(2) (38)
pezzo = STRUCT([traslazioneGriglia, baseGriglia])
traslazioneGriglia = T(1) (4)
pezzo = STRUCT([traslazioneGriglia, pezzo])
traslazioneGriglia = T(2) (1)
pezzo = STRUCT(NN(6)([traslazioneGriglia, pezzo]))
griglia = STRUCT([griglia,pezzo])
traslazioneGriglia = T(2) (38)
pezzo = STRUCT([traslazioneGriglia, baseGriglia])
traslazioneGriglia = T(1) (6)
pezzo = STRUCT([traslazioneGriglia, pezzo])
traslazioneGriglia = T(2) (1)
pezzo = STRUCT(NN(4)([traslazioneGriglia, pezzo]))
griglia = STRUCT([griglia,pezzo])
pezzo = CUBOID([6,0.5])
pezzo = PROD([pezzo,Q(0.3)])
traslazioneGriglia = T(2) (38)
pezzo = STRUCT([traslazioneGriglia, pezzo])
traslazioneGriglia = T(1) (4)
pezzo = STRUCT([traslazioneGriglia, pezzo])
griglia = STRUCT([griglia,pezzo])
pezzo = CUBOID([4,0.5])
pezzo = PROD([pezzo,Q(0.3)])
traslazioneGriglia = T(2) (38.5)
pezzo = STRUCT([traslazioneGriglia, pezzo])
traslazioneGriglia = T(1) (4)
pezzo = STRUCT([traslazioneGriglia, pezzo])
griglia = STRUCT([griglia,pezzo])

pezzo = CUBOID([2,2])
finestra = CUBOID([1,1])
traslazioneFinestra = T(1) (0.5)
finestra = STRUCT([traslazioneFinestra,finestra])
traslazioneFinestra = T(2) (0.5)
finestra = STRUCT([traslazioneFinestra,finestra])
pezzo = DIFFERENCE([pezzo,finestra])
pezzo = PROD([pezzo,Q(0.3)])

traslazionePezzo = T(1) (4)
pezzo = STRUCT([traslazionePezzo,pezzo])
traslazionePezzo = T(2) (45)
pezzo1 = STRUCT([traslazionePezzo,pezzo])
traslazionePezzo = T(2) (43)
pezzo2 = STRUCT([traslazionePezzo,pezzo])
traslazionePezzo = T(1) (2)
pezzo2 = STRUCT([traslazionePezzo,pezzo2])
pezzi = STRUCT([pezzo1,pezzo2])
griglia = STRUCT([griglia,pezzi])

rotazioneGriglia = R([1,3]) (PI)
grigliaRuotata = STRUCT([rotazioneGriglia, griglia])
traslazioneGriglia = T(1) (21)
grigliaRuotata = STRUCT([traslazioneGriglia, grigliaRuotata])
griglia = STRUCT([griglia,grigliaRuotata])

rotazioneGriglia = R([2,3]) (PI/2)
grigliaRuotata = STRUCT([rotazioneGriglia, griglia])
rotazioneGriglia = R([1,2]) (PI/2)
grigliaRuotata = STRUCT([rotazioneGriglia, grigliaRuotata])

traslazioneGriglia = T(1) (25)
grigliaSpostata = STRUCT([traslazioneGriglia,grigliaRuotata])
griglieA = STRUCT([grigliaRuotata,grigliaSpostata])

#Passiamo alla griglia B
cornice = CUBOID([1,1])
finestra = CUBOID([0.5,0.5])
traslazioneFinestra = T(1) (0.25)
finestra = STRUCT([traslazioneFinestra,finestra])
traslazioneFinestra = T(2) (0.25)
finestra = STRUCT([traslazioneFinestra,finestra])
corniceConFinestra = DIFFERENCE([cornice,finestra])
baseGriglia = PROD([corniceConFinestra,Q(0.3)])
traslazioneGriglia = T(1) (1)
pezzo = STRUCT(NN(24)([traslazioneGriglia, baseGriglia]))
pezzo = STRUCT([pezzo,baseGriglia])
traslazioneGriglia = T(2) (1)
pezzoSpostato = STRUCT(NN(2)([traslazioneGriglia, pezzo]))
pezzi = STRUCT([pezzo,pezzoSpostato])
rotazionePezzo = R([2,3]) (PI/2)
pezzoRuotato = STRUCT([rotazionePezzo,pezzi])
traslazionePezzo = T(2) (21)
pezzoSpostato = STRUCT([traslazionePezzo,pezzoRuotato])
griglieB = STRUCT([pezzoRuotato,pezzoSpostato])

traslazioneGriglia = T(2) (3)
pezzo = STRUCT([traslazioneGriglia,pezzo])
traslazioneGriglia = T(2) (1)
pezzoSpostato = STRUCT(NN(5)([traslazioneGriglia, pezzo]))
pezzi = STRUCT([pezzo,pezzoSpostato])
rotazionePezzo = R([2,3]) (PI/2)
pezzoRuotato = STRUCT([rotazionePezzo,pezzi]) 
traslazionePezzo = T(2) (2)
pezzoSpostato = STRUCT([traslazionePezzo,pezzoRuotato])
traslazionePezzo = T(2) (17)
pezzoSpostatoDiNuovo = STRUCT([traslazionePezzo,pezzoSpostato])
griglieB = STRUCT([griglieB,pezzoSpostato, pezzoSpostatoDiNuovo])

traslazioneGriglia = T(2) (6)
pezzo = STRUCT([traslazioneGriglia,pezzo])
traslazioneGriglia = T(2) (1)
pezzoSpostato = STRUCT(NN(35)([traslazioneGriglia, pezzo]))
pezzi = STRUCT([pezzo,pezzoSpostato])
rotazionePezzo = R([2,3]) (PI/2)
pezzoRuotato = STRUCT([rotazionePezzo,pezzi]) 
traslazionePezzo = T(2) (4)
pezzoSpostato = STRUCT([traslazionePezzo,pezzoRuotato])
traslazionePezzo = T(2) (13)
pezzoSpostatoDiNuovo = STRUCT([traslazionePezzo,pezzoSpostato])
griglieB = STRUCT([griglieB,pezzoSpostato, pezzoSpostatoDiNuovo])

pezzo = CUBOID([2,2])
finestra = CUBOID([1,1])
traslazioneFinestra = T(1) (0.5)
finestra = STRUCT([traslazioneFinestra,finestra])
traslazioneFinestra = T(2) (0.5)
finestra = STRUCT([traslazioneFinestra,finestra])
pezzo = DIFFERENCE([pezzo,finestra])
pezzo = PROD([pezzo,Q(0.3)])

traslazionePezzo = T(1) (2)
pezzoSpostato = STRUCT(NN(4)([traslazionePezzo, pezzo]))
pezzi = STRUCT([pezzo,pezzoSpostato])
rotazionePezzo = R([2,3]) (PI/2)
pezzi = STRUCT([rotazionePezzo,pezzi])
traslazionePezzo = T(3) (45)
pezzi = STRUCT([traslazionePezzo,pezzi])
traslazionePezzo = T(2) (4)
pezzi = STRUCT([traslazionePezzo,pezzi])
traslazionePezzo = T(1) (15)
pezziSpostati = STRUCT([traslazionePezzo,pezzi])
pezzi = STRUCT([pezziSpostati,pezzi])
traslazionePezzo = T(2) (13)
pezziSpostati = STRUCT([traslazionePezzo,pezzi])
pezzi = STRUCT([pezziSpostati,pezzi])
griglieB = STRUCT([griglieB,pezzi])

pezzo = CUBOID([5,2])
finestra = CUBOID([4,1])
traslazioneFinestra = T(1) (0.5)
finestra = STRUCT([traslazioneFinestra,finestra])
traslazioneFinestra = T(2) (0.5)
finestra = STRUCT([traslazioneFinestra,finestra])
pezzo = DIFFERENCE([pezzo,finestra])
pezzo = PROD([pezzo,Q(0.3)])

rotazionePezzo = R([2,3]) (PI/2)
pezzoRuotato = STRUCT([rotazionePezzo,pezzo])
traslazionePezzo = T(3) (45)
pezzo = STRUCT([traslazionePezzo,pezzoRuotato])
traslazionePezzo = T(2) (4)
pezzo = STRUCT([traslazionePezzo,pezzo])
traslazionePezzo = T(1) (10)
pezzo = STRUCT([traslazionePezzo,pezzo])
traslazionePezzo = T(2) (13)
pezzoSpostato = STRUCT([traslazionePezzo,pezzo])
pezzi = STRUCT([pezzo,pezzoSpostato])
griglieB = STRUCT([griglieB,pezzi])


#ritocchi
ritocco = CUBOID([25,2])
ritocco = PROD([ritocco,Q(0.1)])
traslazioneRitocco = T(3) (3)
ritocco = STRUCT([traslazioneRitocco,ritocco])
traslazioneRitocco = T(2) (19)
ritoccoSpostato = STRUCT([traslazioneRitocco,ritocco])
ritocchi = STRUCT([ritocco,ritoccoSpostato])

traslazioneRitocco = T(3) (6)
ritocco = STRUCT([traslazioneRitocco,ritocco])
traslazioneRitocco = T(2) (2)
ritocco = STRUCT([traslazioneRitocco,ritocco])
traslazioneRitocco = T(2) (15)
ritoccoSpostato = STRUCT([traslazioneRitocco,ritocco])
ritocchi = STRUCT([ritocchi,ritoccoSpostato, ritocco])

#Ulteriore ritocco
def domain(n): 
	return INTERVALS(PI)(n)

def disk2D(p): 
	u,v = p 
	return [v*(1.5)*COS(u), v*(1.5)*SIN(u)]

domain2D = PROD([INTERVALS(PI)(32), INTERVALS(1)(3)]) 
semidisk = MAP(disk2D)(domain2D)

semiCilindro = PROD([semidisk,Q(4)])
rotazioneSemiCilindro = R([1,2]) (PI/2)
semicilindroRuotato = STRUCT([rotazioneSemiCilindro,semiCilindro])
traslazioneSemiCilindro = T(2) (10.5)
semiCilindro = STRUCT([traslazioneSemiCilindro,semicilindroRuotato])
traslazioneSemiCilindro = T(3) (40)
semiCilindro = STRUCT([traslazioneSemiCilindro,semiCilindro])
traslazioneSemiCilindro = T(1) (-25)
semiCilindroSpostato = STRUCT([traslazioneSemiCilindro,semiCilindro])
traslazioneSemiCilindro = T(2) (-21)
semiCilindroSpostato = STRUCT([traslazioneSemiCilindro,semiCilindroSpostato])
rotazioneSemiCilindro = R([1,2]) (PI)
semiCilindroRuotato = STRUCT([rotazioneSemiCilindro,semiCilindroSpostato])
semiCilindri = STRUCT([semiCilindroRuotato,semiCilindro])


figura = STRUCT([COLOR([0,1,7])(figura),griglieA, griglieB, ritocchi, COLOR([0,1,7])(semiCilindri)])


#***********************************************************************************************************************************

#Colonne

colonna = larRod([0.5,45.])([32,1])
colonna = STRUCT(MKPOLS(colonna))

traslaColonna = T([1,2]) ([2,6])
colonnaTraslata = STRUCT([traslaColonna,colonna])
traslaColonne = T(2) (4.5)
colonneTraslate = STRUCT(NN(2)([traslaColonne,colonnaTraslata]))
colonne = STRUCT([colonnaTraslata,colonneTraslate])
traslaColonne = T(1) (10)
colonneTraslate = STRUCT(NN(2)([traslaColonne,colonne]))
colonne = STRUCT([colonne,colonneTraslate])

figura = STRUCT([figura,colonne])


#***********************************************************************************************************************************

#Porta

pt1 = [0,0]
pt2 = [1,0]
pt3 = [0,2]
pt4 = [1,2]
pt5 = [0.5,3]

VerticiPorta = [pt1,pt2,pt3,pt4,pt5]
CellePorta = [[1,2,3,4,5]]

porta = STRUCT([MKPOL([VerticiPorta,CellePorta,None])])
porta = COLOR(BLACK) (porta)

traslazionePorta = T(1) (10)
porta = STRUCT([traslazionePorta,porta])

rotazionePorta = R([2,3]) (PI/2)
porta = STRUCT([rotazionePorta,porta])
rotazionePorta = R([1,2]) (PI/2)
porta = STRUCT([rotazionePorta,porta])

figura = STRUCT([figura,porta])

VIEW(figura)



