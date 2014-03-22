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
VIEW(piani)




