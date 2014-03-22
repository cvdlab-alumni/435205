from pyplasm import *

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
piani = STRUCT([COLOR (RED) (pianiA), COLOR (GREEN) (pianiB), COLOR (BLUE) (pianiC)])

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

facciataA = STRUCT([figuraD, figuraE, figuraF1, figuraF2, figuraG1, figuraG2, figuraH1, figuraH2, figuraI1, figuraI2, figuraI3, figuraI4, figuraJ, figuraK1, figuraK2, figuraK3, figuraK4, figuraL, figuraM1, figuraM2])

rotazioneFacciata = R([2,3]) (PI/2)
facciataARuotata = STRUCT([rotazioneFacciata, facciataA])
rotazioneFacciata = R([1,2]) (PI/2)
facciataARuotata = STRUCT([rotazioneFacciata, facciataARuotata])

#duplico la facciata A (Nord & Sud)
traslazioneFacciata = T(1)(25)
facciataASpostata = STRUCT([traslazioneFacciata, facciataARuotata])

facciateA = STRUCT([facciataARuotata,facciataASpostata])



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

figura = STRUCT([COLOR([0,7,10]) (facciateA), COLOR(GRAY) (facciateB), piani])

VIEW(figura)