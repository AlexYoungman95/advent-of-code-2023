const data = [
'Card   1: 69 12 75 19 83 56 73 53 52 91 | 83 63 56 30 77 94 12 81 42 69 52 70  6 97 20 43 61 22 75 19 73 32 74 53 91',
'Card   2: 23 55 24 84 90 10 87 73 74 45 | 20 66 51 78  9 76 86 96 72 70 84 35 74 90 56 55 23 38 58 45 87  2 80  8 10',
'Card   3: 70 32 38 23 86 54 26 16  9  1 | 67 50 39 70 59 77 63 30  3 45 23 16 72  1 86  7  9 32 26 68 38 54 65 34 64',
'Card   4: 33 50 19 63 92  1 58 34 84  8 | 35 61 49 86 40 20 22 71 84 51 64 62 33 85 45  3 54 83  1 29 82 19 92  8 11',
'Card   5: 74  9 54 83 22 15 81 64 47 70 | 21 74 59 85 17 36  5 79 87  7 13 23 47 45 96 29 68 65  3 22  4 34 46 90 40',
'Card   6: 29 55 56 13 58 71 36 30 15 11 | 99 17 90 29 22 68 61 55 11 13 37 94 30 60 56 92 44 71 42 31  8 26 14 51 35',
'Card   7: 92 70 97 62 33 45 85 59 82 73 | 92 35 11 49 88 14 85 42 40 41 69 51 82 73  5 87 60 62 33 97 70 16 59 13 45',
'Card   8:  5 22 64 46 32 90 57 83 37 38 | 87 47 91 35 39 64 73 83 71 22 10 45  1 76 37 13 20 66 67 21 86 92 38 12 52',
'Card   9:  7 49 62 79 37 91  3 58 74 19 | 17  7 58  2 53 95 52 62 83 41 42 36  4 94 64 97 20 32  3 73 81 22 57 37  9',
'Card  10: 84 33 81 45 99 96 76 97 40  2 | 81 26 11 34 83 25 45 76  2 85 33 64 57 99 93 75 96  8 84 44 79 87 97 40 70',
'Card  11: 37 41 20 56 16 42 43 11 55  4 |  4 16 71 31 45 53 73 55  6 83 69  2 94 18 58 88 20 41 46 56 11 19 37 43 22',
'Card  12:  9 81 46 38 55 60 39 43 42 93 | 94 39 38 21 60 97 24 33 34 59 82 55 43 12 88 81 46  9 83 93 22 30 41 98 42',
'Card  13: 15 89 14 33 57 55 75 53 80 34 | 59 53 36 57 11 80 75  2 73 15 56 89 33 97 48 77 74 41 14 28 31 35 95 55 34',
'Card  14: 85 50 16 90 98 55 13 71 20  9 | 16 44  4 98 45 50 77 64 55  5 78 90 54 95 48 12  8 28 94 83  9 27 88 85 13',
'Card  15: 41 85 80 55 27 32 26 68 57 77 | 78 39  9 22 31 86 48 18 16 98 15 51 44 21 28 54 87 82 13 36 47 12 55 75 30',
'Card  16: 30 86 48 11 24 68 95 82 44 45 | 68 91 65 86 42 44 82 56 58 18 77 20 95 54 21 90 22 14 24 33  6 63 40 36 28',
'Card  17: 81 84 89 44 27 49 36  8 70 22 | 75 47  8  2 36 10 34 44 71 48 31 82 70 42 92 93 81 72 94 22 51 91 73 67 78',
'Card  18: 95 62 99 37 38 52 88 92 79 54 | 65 87 72 84 10  1 24 94 59 16 15 64 49 92 78 17 28 69 55 67  6 91 96 58 60',
'Card  19: 89 92 19 42 96 33 44  1 76 36 | 77 11 55 81 43 20 90 14 54 52 34 10  4 74 12 99 83 17 51  5 21 56 91 37 61',
'Card  20:  7  4 51  9 16 56  3 81 85 21 | 31 78 15 17 35 55 83 33 48 12 60 77 92 65 30 72 43 39 64 62 63  1 14 58  5',
'Card  21: 95 47  9 72 82 48 84 37 23 65 | 89 61 26  7 99 77 11 50 71 12 55 54 31 49 81 32 33 74 52 97 79  3 91 76 37',
'Card  22: 58 37 93 89 50 61 52 95 36  3 | 66 71 42 29 82 73  9 72 54 19 46 24 23 59 64  5 41 48 55 53 25 62 74 34 78',
'Card  23: 92 82  9 63 64 65 48 93 19  7 | 35 24 41 95 87 67 10 91 57 40 80 17 47 98 77 79 25  1 32 53 11  3 14 42 73',
'Card  24: 62 60 83 65  7 43 18 53 91  4 | 20 34 93 41 36 25 44 97 30  5 32 42 75 71 84 23 76 89 33 26 65 52 78 81 70',
'Card  25: 90 68  7 51  3 89 62 67 18 23 | 74  6 13 70 15 80 59 32 35 42 44 50 49 73 63  4 82 27 68 31 92 29 98 11 85',
'Card  26: 22 28 52 16 49 54 55 51 89 20 | 99 51 82 24 18 65 55 72 85 36 86 95 71 61 77 38 12  4 96 89  7 97 40 66 91',
'Card  27: 64 40 71 56 94 62 60 72 22 55 |  3 27 22 64 74 31 55 70 78 40 94 13 42 93  9 28 45 98 57 33  1 16 21 92 24',
'Card  28: 59 21 57 48 64 98 34 84 95 52 | 14 65 50  8 74 29 62 64 59 60 88 23  7 36 12 52 34 58 97 35 70 86 79 73 31',
'Card  29: 81 89 72 63 67  2 97 19 58 70 | 25 72 10 81 70 58  1 37 62 67 96 21 35 26 20 97 14 39 74 29 12 57 18 91 42',
'Card  30: 74 61  1 98  5 68 20 47 81 78 | 76 47 32 58 16 19 41 17 18 82 70 68 27  7 55  1 24 11 59 94 30 90 85 26 53',
'Card  31: 37 24 52 75 26 62 71  8 59 92 | 39 58 75  3  9 86 84 91 88 42 14 83 18 52 50 37 63 24  5 71 23 62 94 61 92',
'Card  32: 66 87 81 58 95 41 47 76 20 12 | 83 96 14 38 27 35 68 13 91 84 48 99 29 23 52 31  9 17 79 89  3 51 81  6 56',
'Card  33: 78 15 62 95 50 63 29 61 12 25 | 86  2 50 27 46 48 74 55 36 81 54 42 47 18 98 91  4 76 33 21 49 26 56 35 68',
'Card  34: 15  2  1 97  6 42 96 67 17 86 | 28 45 73  8 56 52 53 97  5 35 86  3 54  4 32 88 23 60  1 47 95 74 10 49 39',
'Card  35: 89 99  6 27 26  8 68 57 36 97 | 12 36 35 28 38 86  8 89 46 52  4 39 93 63 20 91 50 11 27 83 74 92 67 79 18',
'Card  36: 49 27  7 26 25 78 74 32 59 55 | 83 15 44 67 85 28 41 42 58  3 16 51 34 37 66  5  9 82 73 96 27 65 33 29 92',
'Card  37: 68 79 22 61  9 78 29 17  1 83 | 76 94 25 60 90  1 49 88 11 72 37 45 93 97 53 77 27 63 31 74 46 95 40 26 12',
'Card  38: 44 96 29 49 85 92 98 40 83 80 | 11 58  2 79 32 48 56  4 24 76 66 94  1 17 47 63 38  9 75 82 99 53 91 33 88',
'Card  39: 53 13 83 11 12 39 30 77 37 87 | 51 62 47 76 93 34 98 45  6 95 89 41 21 40 88 19 26 43 99 14 67 29 73 59 42',
'Card  40: 23 63 92 24  4 35 93 36 73 88 | 74 42 70 10  4 50 88 92 73 41 76 45 11 36 23 35 24 78 18 59  8 63 72 83 93',
'Card  41: 12 94 49 20 27 52 98 66 99 92 | 20 11 63 14 77 39 38 12 49 94 92 36 55 93 74 30 96 95 66 51 99 27 86 52 90',
'Card  42: 30 27 40 59 75 19 90 81 61 31 | 95 81 45 27 59 19 38 18 30 91 85 89 75 82  4 77 34 61 46 98 40 31 86 90 21',
'Card  43: 80 31 91 49 76 14 72 62 26 51 | 13  4 52 90 31 11 76 34 58 91 49 80 29 55 14 98 22 51 72 83 26 57 92 62 85',
'Card  44: 24 43 54 74 83 21 57  8 19 84 | 57 19 88 15 24 31 74 12 43 95 83 21 10 67 54 76  8 59 52  9 71 92 25 84 55',
'Card  45: 80 50 79 31 57 43 19 36 61 14 | 94 76 21 26 67 80 72 39 14 82 34 85 18 43 10 65 20 64 23 47 89 69 55 17 98',
'Card  46: 52 26 71 96 24 93 64 38 80 29 | 52 36 72 62 64 81 86 16 63 29 15  8 23 46 38 31 33 73 88 93 24 74 21 96 26',
'Card  47: 31 96 28 34 83 59 91 19 40 62 | 21 28 97  6 96 54 66 33 19 93 74 91 25 80 67 31 34 17 27 37 60 62 92  4 98',
'Card  48: 51 27 11 76 40 10 80 12  9 37 | 78  4 35 30 14 29 96 51 20 56 18 22 93 76 94 46 74 26 75 28  3 59 39  9 31',
'Card  49: 41 77 24 13  3  6 14  1 51  9 | 14 93 10 17 61 40 73  6 41 95 13 62 71 98 56 29 75 24 51 26 88  7 85 84 94',
'Card  50: 59 38 20 44 13 84 74 98 31 15 | 40 10  8 25 20  3 38 80 32 77 26 29 61 31  1 35 98  9 63 62 84  4 88 39 73',
'Card  51: 24 63 74 81 52  1 65 22 13 85 | 95 58 64 76 73 90 72 28 91 26 39 27 83 37 77 70 79 55 78 43 42 69 11 88 86',
'Card  52: 42 46 68 26 43  2 38 23 81 67 | 71 88  3 29 63 14 81 64  9 12 13 76 32 62 53 90 99 37 80 61 87 50 75 79 17',
'Card  53:  1 26  8 25 54 65 53 56 99 73 | 42 46 51 32  9 55 63 91 66 69 33 34 79 11 67 27 92 21 83 77 35 38 98 74 59',
'Card  54: 75 47 66 55 72 60 38 53 62 21 | 71 40 89 51 75 31 93 45 53 13 92 11 98 68 44 87 74 61  8 39 30 63  1  7 76',
'Card  55: 54 71  4 44 61 59 64 50 73 47 | 20  7 31 66 69 37 30 42 86 43 83 34 70 78 56 15  3 50 41 67 88 17 46 81 96',
'Card  56: 90 32 94 66 80 55 96 47 11 51 | 46 69 89 30 50 65 16 83 17 44 88 70 12 91 74 67 86 63 15 29 26 60 57 14 23',
'Card  57: 87 98 51 22  7 28 33 12 17 70 |  4 47 38 40 95 74 97 58 53 43 21 54 35 27 46 85 16 10 14 94  3 36 66 86  5',
'Card  58: 88 63 18 90 57 37 62 58 72 28 | 74  5  7 24 73 85  3 77 22 19 32 44 25 69 93 86 98 46 56 26 34 50 79 23 55',
'Card  59: 40 77 65 18 14 43 94 95 45 10 | 39 28 14  2 95 70 44 45 34 83 18 65 94 74 40 33 73 78 87 72 64 77 10 43 50',
'Card  60: 34 55 62 11 10 76 53 25  7 35 | 88 79 26 19 38 90 78 53 46 52 17 15 83 56 69 75 99 62 10 35  6 36  7 45 28',
'Card  61: 36 39 79  7 83 22 10 74 86 85 | 74 72 51 10 55 84 22 36 54 71 39 34 83 57 75 60 86 94 53 85 37 97  9 65 42',
'Card  62: 91 20 88  6 48 82 11 10 95 40 |  6 88 60 44 89 18 81 68 58 71 76 20 85 40 11 59 10 92 82 66 91 54 48 95 30',
'Card  63: 44 80 81 49 32 24 40 41 77 94 | 56 54 99 69 58 10 49 74 11 21 68 16 87 98  1 84 83 81 78 41 76 60 63 13 22',
'Card  64: 81 32 24 86 14 28 10 21 92 70 | 74 87 58 24 96 12 92 14 33 68 76 99 85 70 69 19 13  3 94 21 48 97 32  1 20',
'Card  65: 18 20 67 41 90 98 61 52 11 42 | 89 90 34 87 57 88  6 62 96 13 28 11 61 40 77 67  2 66 81 36 42 18 91 52 56',
'Card  66: 26 28 58 35 42 73 29 23 77 95 | 84 98 34 95 15 63 36 92 48 28 35 83 39 93 16  6 23 81 59 42 52 62 57 22 70',
'Card  67: 22 63 17 14 53 95 13 20 40 16 | 60 31 90 27 49 86 32 95 87 65 74 98 43 33 67 28 61 63 17 82  9 50 21 75 85',
'Card  68: 93 69 87 27 83  7 73 81 88 14 | 81 97 83 73 87  1 10 55 88 41 14 26 56 63 44 71 27  7 64 69 37 11 42 93 61',
'Card  69: 15 42 34 80 13 97 21 26 20 65 | 16 28 38 12 43 56 11  4 79 39 93 40  8 34 23 19 53 67 29 77 68 27 30 94 46',
'Card  70: 18  7 31 15 28  1 78 41 58 48 | 42 56 25  1 92 97 84 63 26 95 12 50 53 48 14 78 13 28 22 37 71 77 91 41 38',
'Card  71:  5 70 37 60 66 16 81 11 47 43 | 38  1 83  8 75 23 70 60 11 39  4 81 74 14 79 53 51 13 32 78 58 66 24 80 92',
'Card  72: 40 51 21 14 88 48 31 20 39 76 |  5 19 68 18 92 35 77 32 86 84 37 42 28 13 78 71 75 98 87 29 94 16 30 67 89',
'Card  73: 47 29 76 34 14 96 15 43 69 74 | 83 61 59 89 11 60 98 28 22  6 66 53 71 13 68 67 58 56 46 96 76 50 20 33 97',
'Card  74: 96 21 62 93 84 51 60 98 28 35 | 21  8 57 98 63 93 78 12 56 43 24 33 11 26 54  4  3 47 17 96 66 64 81 85 16',
'Card  75: 55 16 42 20 26 84 76 39 29 51 | 64 30 44  8 58 22 78 39 40 15 38 54 85 20 57 82  4 67 86 72 37 51 96 16 18',
'Card  76: 46 64 22 56 81 45 68 54 14 24 | 36 29 56 79 48 60 46 12 23 24  7 94 93 30 50 43 83 68 62 63 90 70 72 74 39',
'Card  77: 27 51 60 83 18 46 10 23 57 44 |  1  9 39 85 30 36  8 46 84 22 69 29 81 50  2 78 73 74 95 34 77 70  5 20 12',
'Card  78: 84 85 50 14 34  1 25 10 54 15 | 17 39 78 70 29 33 49 32 55 76 50 93 72 73 12 56 24 61 90  8 69 58 98 86 96',
'Card  79: 91 20 66 77 51 88 69 81 79 30 | 90 45 13 85 78 55 86 76 65 34 59 22 37 99 49 94 60 54 46 17 84 28 61 44 74',
'Card  80:  4  9 37 77 89 91 29 31 62 57 | 69  6 94 11 58 93 26  3 55 43 53 32 86 20 65 21 68 81 56 15  1 72 27 71 23',
'Card  81: 26 19 49 67 15 54 44 27 25 64 | 71 44 75 54 64 48 22 27 30 28 72 77 67 65 15 23  7 19 85 89 42 49 26 25 16',
'Card  82: 78 13 96 18 46 74 53 16 73 33 | 37 96 16 58 35 13 83 73 61  4 69 92 65 11 75 53 23 49 12 22 79 33 78 74 98',
'Card  83: 93 82 29  5 95 96 57 16 94 67 | 39 29 16 81 94 95  5 77 32 48 67  6 19  2 96 24 53 82 65 57 93 51 44 49 58',
'Card  84:  7 48 34 66  4 31 74 99 33 96 | 96 58 25 36 28 24 30 35 42 20 13 97 60 85  1 53 52 26 48 70 14 99 75  8  5',
'Card  85:  6 44 69 84 80 37 35 82 90 30 | 84 91 57 69 27 82 16 71 30 53 18 80 13  9 35  6 20  4 44 11 37 73 90 41 12',
'Card  86:  4 75 26 24 90 91 69 77 29 60 |  5 72 80 64  4 73 29 13 90 37  3 26 59 77  7 84 60 81 69 46 99 24 35 75 91',
'Card  87: 70 57 68  5 86 89 95 31 87 83 | 17  9 47 62 86 53 82 74 46 31 67 64 14 70 98 57 71 95 30 25 28 68 89 84 59',
'Card  88: 51 56 93 33 14 71 37 77  2 58 |  2  8 18 63 35  7 99 93 39 73 25 77 58 83 14 51 27 56 33 40 24 37 80 71 72',
'Card  89: 86 49 19 13 54 47 56 26 81 52 | 48 40 43 63 35 85 98 86 22 55 26 46 17 19 68 34 56 13 64 27 72 47 49 54 24',
'Card  90: 60 81  8 65 64 32 28 87 18  6 |  2 64 62 81  3 28 38  9 96  8 45 40 42 83 65 32 87  6 60  4 50 36 33 68 18',
'Card  91: 75 42 51  6 29 41 94 61 55 22 | 68 95 31 64 41 37 22 76  6 81 51 75 67 79 33 70 94 55 58 56 42 61 29 15 13',
'Card  92: 34  7  3 23 79 80 98 40 88 48 | 90 88 94 61 31 59 23 47 81 85 86 48 63 35 73 52 79 70 20  1 97 28 51 75 42',
'Card  93: 76 61 71 49 23 84 64 10 82 73 | 23 45 76 31 93 10 84 49 68 62 28 72 20 38 82 13 25 81 60 19  9  7 34 21 89',
'Card  94: 76 15 19 25 37 72 78 80 62 57 | 13 19 98 73 48 37 92 68 44 93 90 72 21 60 76 80 23 57 25 20 15 78 89 62 51',
'Card  95: 20 96 12 88 73 61 75 18  5 17 | 22  1 64 19  3 42 63 80 84 35 43 89 51 94 54 28 32 70 31 56  4 59 79 30  7',
'Card  96: 97 67 10 32 57 41 94 26 74 43 | 67 32 18 55 93 61 21 29 69 83 39 92 58 23 41 59 87 30 50 25 10 94 52 71 43',
'Card  97: 18 90  8 91 82 70 88 76 32 45 | 58 78 45 86 23 72 85 30 17 27 93 43 25 79 57 11 71 33 44 89 13 46  3 26 48',
'Card  98: 99 17 45 67 83 78 76 93  5 52 | 32 23 76 40 96 56 26  9 29 63  1 33 15 75 85  5 82 70 99 30 41 58 16 42 86',
'Card  99: 81 50 99 31 96 61 90  8 36 89 | 22 75  6 93  9 11 88 53 47 44 59 64 35 69 29 46  3 15 91 92 30 67 45 26 56',
'Card 100: 14 92 52 90 63 31 25 23 47 75 | 92 52 39 94 90 66 36 68 35 63  3  5 75 86 50 30 48  2 34 64 45 17 95 53 93',
'Card 101: 17 15 32 41 78 12 24 52 34 20 | 36 55 92 11 62 40 16 53 21 56 78 71 31 42 85  6 45 46 57 69 12 49 65 94 20',
'Card 102: 95 72 92 52 48  6 12 90 89 11 | 78 79 33 36 18 60 54 35 48 47 44 29 70 91 59 99 72 22 88 75 83 20 68 15  2',
'Card 103: 26 92 77 86 75 71 40 99 18 42 | 70 85 45 30 69 51 62  5 72 35 23 48 12  2 31  6 57  9 43 65 55 34 74 64 82',
'Card 104: 58 47 91 85  1 98 77 97 11 59 | 41 60 46  2 62 94 30 17 48 38 65 58 61 45  7 81 14 33 13 66 49 36 35 83 16',
'Card 105: 52 94 29 51 24 72 81 38 22 98 | 89 25  2 20 19 87 35 31 27 63 58 93 79 74 42 73  6 70 45 56 68 10 23 71  4',
'Card 106: 53 31 52 12 77 13 57 75 83 33 | 32 21 47 79 18 85 20 31  1 81 17 57 99 36 11 68 29 15 83 38 72 13 10 44 45',
'Card 107: 10 29 45 39 88 11 84 46 33 50 | 33 49 53 88 29 25 93 69  3 58  7 39 10 44 46 71 11 87 50 65 81 84  4 45 98',
'Card 108: 36 89 17 61 91 20 40  8 82 47 | 45  3 43 62  8 57 20 30 40 99 61 36 38 82 16 90 17 87  9 89 91 47 66 86 68',
'Card 109:  8 13 16 10 53 17 67 40 36 84 |  8 19 31 95 42 34  1 83 91 94 12 18 14 65 11 74 63 81 54 22 41 33 97  4 15',
'Card 110: 55 85 53 30 52 59 96 36 33 21 | 30 96 65 49 85  9 55 78 90 37 68 59 48 51 21 14 50 67 10 52 33 36 70 57 53',
'Card 111: 40 29 81 28 52 78  5 33 87 77 | 45 50 80 64 55 81 77 54 92 29 93  3 21 84 78 65 40 34 98 43 13  5 94 33 18',
'Card 112: 91 31 32 89 65 14 81 46 80 17 | 51 89 58 46 80 29 50 14 91 66 57 98 31 82 39 17 99 81 13 55 43 32 77 18 65',
'Card 113: 64  3 12 40 34 93 80 96 45 88 | 36 64 17 44 61 80 34 12 28 42 98 77 66 40 45 96 19 93  3 48 10 25 88 22 30',
'Card 114: 36 43 48 47 24  7 71 13 72 75 | 48 60 50 52 64 85 45 68  8 55 62 91 71 97 98 24 70 20 43 80 76  7 18 96  1',
'Card 115: 64 82 48 63 66 62 79 40 51 17 | 28 52 96 36 84 33 68 92 98 18 37 26 21 16 82  4 43  6  9 79 30 75 42 77 91',
'Card 116: 84 70 36 38 87 33 64 45  8 91 | 94 74 91 84 60 36 10 33 45 55 37 62 90 31 19 44 25  8 78 38 87 18 64 70 20',
'Card 117: 10 92 76 54 73 71 68 49 53 27 | 60 92 53 82  6 49 67 27  5 61  4 90 68 73 10 75 76 54 17 71 95 50 37 87 84',
'Card 118: 10 68 81 55  1 91 64 75 92 39 | 76 94  8 44 86  7 78 15 41 25  4 51 66 53 36 14 59 69 74  5 88 33 45 83 17',
'Card 119: 35 23 45 13  9 14 94  6 12 41 |  6 16 52 24 84 17 92 79 14 38 11 32 54 83 63 43 74 64 45 94 68 67 66 78 10',
'Card 120: 68 33 17  3 24 21 79 44 84  6 | 85 10  6  5 52 32 45 46  8 24 86  2 29 27 12 11 40 69 64 21 13 68 33 93 63',
'Card 121: 77 42 71 14 17 27  4 75 45  8 | 80 77 32 94  3 25 64 63 72 49 42 38 35 36 93 26 67 89 17 66 12 92 96 65 90',
'Card 122: 94 91  9 21 25 86 37 13 93 96 | 41 14 54 30 68 50 12  6 76 91  8 95  3 53  5  2 98 56 90 38 21 39 20 45 16',
'Card 123: 49 59 88 74 16 29 83 17 60 47 | 92  9 95 48 86 89 56  7 83 16 97 78 23 65 62 30 28 29 17  6 59 96 37 88 49',
'Card 124: 68 64 89 27 10 36 12 38 87 46 | 35 12 29 70 80 69 18 38 31 97 53 33 56 66 36 73 58 60 44 61 94 63  2 22 17',
'Card 125: 77 92 88 57  3 61 54 44 15 22 | 30 37  2 15 24 49 19 86 62 70 60 88 79 11  1 98 71 55 14 48 51 35 23 16 96',
'Card 126: 76 29 81 69 87 79 10 49 62 31 | 95 22 29 33 69 91 46 40 78 92 34 52 65 98 99 28  2 35 73 86  4 94 31 25 88',
'Card 127:  1 99 64 88 36 28 92 32 63  9 | 54 71 17 24 48 47 99 74 64 39 88 35 79 80 84  2 33 20 16 27 59 37  6 97 55',
'Card 128: 52 58 71 21 38 88 83 79 39 10 | 31 43 84 97 85 48 50 17 82 22 18 75 24 36  5 23 63 95 94 87 91  8 37  7 54',
'Card 129: 10 54 52  8 38 60 47 73 42 33 | 89 74 88 23 66 70 92 16 36 65 78 41 49 99 53  5 57 11 29 98 56 44 97 64 35',
'Card 130: 35 26 36 87 14 85 88 54  5 53 | 73 42 64 66 27 59 98  8 68 70 47 67 81 25 40 93 91  6 77 20 99 31 50 43 61',
'Card 131: 91  7 42 28 60 68 25 80 57 93 | 29 34 10 71 68 30  7 22 28 91 21 49 23 93 60 20 57 80 78 25 13 42 84 17 43',
'Card 132: 36 98 95 88 82 61 75 30 43 54 | 44 64 42 70 77 99 84 80 59 53 37 18 26 56 97 33 31 50 15 41 52 58 63 93 65',
'Card 133: 83 91 98 86 39 72 13 19 42 73 | 26 42 36  4  8 84 38 12 95 48 55 37 91 25 81 32 50 14 21 33 77 92 59  2 97',
'Card 134:  1 13 47 70 17 85 19 63 38 92 | 59 99 23 55 72 92 44 40 53 68 88 14 69 65 35 32 28 79 75 74 34 27 87 77 47',
'Card 135: 22 93 70 76 73 17 69 24 74 61 |  5 29 39 92 65 69 79 57 66 23 46 22 77  7 93 73 24 38 95  6 97 43 76 42 31',
'Card 136: 23  4 75 77 41 61 88 73 50 82 | 59 73 86 29 27 58 82  2 69 84  4 34 49 12  6 80 46 19  7 92 72 88 38 39 63',
'Card 137: 48 73 51  4 52 69 74 67 65 81 | 76 28  5 72 91 18 27 83 47 67 21 11 34 62 14 90 13 49 85 74 66 58 65  4 78',
'Card 138: 55 32 80 57 86 78 54 90 97 41 | 30 14 80 39 32 55 54 11 82 87 68  2 99  3 47 78 40 69  5 77 53 50 56 86 74',
'Card 139: 29 52 70 64 28 93 18 55 36 88 | 88 49 38 44 56 59 25 16 20 36 75 14 62 84  6 71 86 63 91 10 57 67 98 85 52',
'Card 140: 65 34 63 69 67 18 50 40 49 82 | 40 21 18 65 87 49 15 32  3 82 95 41  4 42 29 93 88 57 56 62 12 68  2 27 67',
'Card 141:  8 82 31 30  9 54 80 98 17 42 | 26  8  5 36 70 86 66 59 50 13 15  9 68  3 39 77 92  2 96 61 48 84 83 82 32',
'Card 142: 72  5 32 33 45 44 21  3  2 27 | 22 24 30 55  9 81 56 72 97 76 92 10 19 98 63 57 88  7 18 32  5 61 29 49 12',
'Card 143: 58 47 61 98 96 94 85 76 73 52 | 44 70 20 86 62 68 22 78 28 32 73 12 72 88 69 59 24 56 60  6 35 49 91 58 83',
'Card 144: 17 14 55 39 13 61 42 84 57 52 | 69 43 76  8 83 92 38 36 91  2 24 74 10  9  7 45 79 23 89 34 28 31 40 18 37',
'Card 145: 55 36  9 53 67 98 95 11 45  1 | 37 27 61 31 70 54 19 34 81 89 76 17 25 66  4 56 49 13 35 32 96  5 26  2 68',
'Card 146: 91  9 31 61 30 48 11 81 37 42 | 60 99  4 49 50  5 90 32  6 58 18 63 45 25 82 74 96 35 43 69 14 62 46 15 41',
'Card 147: 86 99 81 30 94 65 52 77 17 26 | 40 17 34 85 77 86 65  7 93 33  4 42 48 75 94 81 99 52 56 26 15 23 35 60 30',
'Card 148: 96 30 61 70 40 69 55 19 13 11 | 94  7 48 88 43 69 62 29 38 30 31 56 50 58 81 52 46 55 97  3 40  1 33 18 23',
'Card 149: 45 36 22 56 75 66 27 73  9 71 | 38 11 75 36 64 69 14 77 84 40 15 73 76 35 19 86 93 95 32  8 78  9 66 49 48',
'Card 150: 81 99 76 52 43 11 72 20  8 24 |  9 49 45 72 81 25 55 76 77 99 95 12  8 24 74 20 11 16 52 43 51 21 46 14 13',
'Card 151: 85 27 15 60 95 55 48  2 94  3 | 45 73 81 78 57 79  3 27 92 71 94 56 83 60 74  1 15 43 42 23 85  2 95 58 84',
'Card 152: 70 52  7 99  4  8 85 74 56 12 | 44 79 62 12  4 99 74  2 85 52  9 70 58 55 54 56 95  8 13 64  7 75 63 22 82',
'Card 153: 31  8 18 89 88 79 35 59 76 41 | 47 71 86 22 60 76 42 34 35  3 52 68 92 58 91 89 33  8 88 59  1 18 31 41 79',
'Card 154: 68  9 55 95 61 25 59 32 40 58 | 12 29  2 34 23 94 72 78 66 48 64  5 52 96 20 91 57 92 85 37 87 75 73 90 43',
'Card 155: 33 70 62 54 30 96 26  3 95 86 | 59 28  6 57 49 78 27 90 13 10 58 82 17 50 73 38 15 74 25 91 60 32 96 55 80',
'Card 156: 80  8 47 81 20 82 38 54 30 22 | 51 97 20 38 49 45 22 17 39 64 35 54 81 80 28 90 68 30 47 86 41 53 42 34  8',
'Card 157: 11 62 36 43 32 20 96 27 21  4 | 69 25 22 37 83 29 62 20 78 13 46 51  9 98 60 21 96 53 43  3 33 63 84 32 77',
'Card 158: 75 49 89 67 22  1 92 73 60 41 | 62 49  7 96 60 22 75 13  1 21 29 64 41 71 83 58 12 34 57 52 19 76 67 40  3',
'Card 159: 67 64 27 71 93 18 11 49 56 76 | 14 82 35 60 67 64 27 50 72 85 24 49 47 68 40 87 84 78 93 16 36 73 51 70 91',
'Card 160: 74 20 49 81 99 35 53 68 50 88 | 32 76 60 21 93 45 11 44  9 23 34 30 57 51 18 88 14 81 75 99 52 19 73 72 12',
'Card 161: 31  6 20 34  1 25 35 86 54 83 | 10 16 63 35  6 92 14 90 94 83 71 46 85 54 49 21 37 76 58 75 84 22 86 57 43',
'Card 162: 71  2 91 45 18 67 32 35 70  4 | 80 33 18 86 13 25 41 28  1 74  5 51 63 27  7 77 43 40 66 60 30 52 55 45 96',
'Card 163: 56 80  7 96 74 20 25 91 42 15 | 13  7 87 92  8 85 17 20 60 62 27 50 51 58 59 21 74 99 12 18 32 64  6 71 75',
'Card 164:  4 62 31 56 10 21 45 51 59 28 | 21 74 82 81 59 55 37 88 56 11 22 63 31 99 86 26  5 16 57 83 24 97  1 42 60',
'Card 165: 94 10 52 85 46 27 60 31 82 72 | 36 85 26  9 51 41 49 87 66 70 76 32 16 46 62 88 27 44 84 34 78  4 65 81 10',
'Card 166:  8 14 12 94 28 37 96 13 36 70 | 67 69 85 45 29 71  7 26 97 91 11 48 65 22 12 81 60 34 77 25 80 10 38 24  8',
'Card 167: 16  2 11 60 29 32 85 84 18 37 | 72 73 99 87 80 49 68  2 25 19 44 51 45 78 24 10 82 92 28 50 36 58  5 11 33',
'Card 168: 88 20 78 53 45 93 64 86 62  7 | 55 16 24 32 82  9  1 91 81 34 94 61 89 76 40 58 88  2 23 25 49 44 83 42 21',
'Card 169: 30 43 68 19 84 46 34 79 83 40 | 75 12 72 24 86 81  2 96 41 69  8  7 98 20 16 38 77 44 32 17 73 51 35 76 27',
'Card 170: 36 65 99 63 11 80 98 57  2 75 | 63 44 48 60 89 80 16 30 82 85 69  5 98 36 47 43 37 78 75  7  2 79 40 55 90',
'Card 171: 41 22 51 44 98 50 68 64 39 18 | 29 39 55 97 42 28 81 76 98 49 93 51 20  2 18 44 50 90 22 64 45 41 94 68 60',
'Card 172: 45 51 90 61 87 12 43 42 26 30 | 30 22 90 14  5  8 42 43 61 87 50 29 34 26 53 93 95  1 51 58 91 45 18 12 78',
'Card 173: 95 73 34 88  4 83 91 10  1 20 | 45 30 58 70 65 47 74 99 25 32  6  3 94 97 76 11 50 21 36 18 38  7 55 60 95',
'Card 174: 12 23 97  6 85 48 73  1 78 46 | 78 39 29 27  6 73 46 22 75 95 42 12 23 93 89 85 20  1 97 72 48 58 24 70 91',
'Card 175: 88 37 59 56 86 58 64 51 35 47 | 93 82 64 79 88 28 51 13 23 59 71 47 37 83 70 25 35 86 58 56 61 67 78 62 50',
'Card 176: 86 97 60 68 91 83 55 56 75 16 | 68 10 99 70 61 43 50  6 59 75  4 97 34 91 44 71 67 93 69 38 73 48 33 17 83',
'Card 177: 41 33 14 32 99 37 64 21 36 56 | 41 14 24 64 74 43 99 36 33 89 17 71 49 21 37 57 32 85 72 47  8 20  5 28 56',
'Card 178: 99 62 41 81 76 89 17 83 43 40 | 44 38 51 82 98 49 65 85 20 17 72  5 28 96 97 46 10  4 34  7 55 15 47 29 36',
'Card 179: 67 25 97 77 59 39 10 51 95 48 | 98 93 29 51 97 84 95 50 67 59 10 39 44 20 48 60 25 96 12 89 21 77 52 76 47',
'Card 180: 12 42 91 75 77 56 92 58 51 99 | 38 66 35 19 51 90 73  3 49 81 92 10 77 48 83 58 78 99 54 72 29 47 69 34 56',
'Card 181: 15 26 91 99 68 10 89 79 80 98 | 33 78  6 84 91 99 42 66 26 15 89 39 80 29 98 10 53 17 56 31 59 35 51 79 68',
'Card 182: 75  8 59 52 93 56 14 29 18 84 | 68 14 10 56  1 78 11 84 69 36 13 93 21  8 65 31 44 18 50 53  2  4 38 88 75',
'Card 183: 75 72 67 62 88 12 44 69  3 64 | 62 14 70 41 95 11  5 15 67 35 79 46 49 93 64  2 18 34 21 94 44  6 76 10 72',
'Card 184: 86 33  8 63 89 57 81 61 21  1 | 49 80 47 26 39 40 67 25 90 64 24 91 37 95 28  5 15 50 66 73 19 33  9 97 54',
'Card 185: 61 96  4 67 63 22 49 26  6 45 |  1 48 72 52 91  5 77  6 26 57 33 75 71 21 22 73 66 74 54 11 65 19 37 67  4',
'Card 186: 19 10 50 72 54 85 38 31 28 15 | 64 20 30 78 74 31 83 46 43 12 28 36 84 11 66 96 75  7 76 93  2 18 42 38 86',
'Card 187: 37 68 16 30 95 54 73 20 43 32 |  7  8 62 54 26 33 24 43 57 99 31 23 36  3 15 45 55 75 37 95 29 27  5 46 67',
'Card 188: 33 20 43 74 98 62 11 84 97 69 | 69 92 30 64 72  2 20 46 31 88 43 50 79  1 53  9 17 81 57 65 67 28 74 90 34',
'Card 189: 61 87 63 36 35 72 26 28  7 81 |  6 66 52 40 56 80 92 58 13 10 69 93 98 99 60 88 39 49  9 42 15 33 68  3 23',
'Card 190: 78 91 72 67 59 99 42 32  1 60 | 47 85 79 17 22 28 68 18 21 45 87 92  9  7 46  4 34 70 29 40 69 74 62 71  5',
'Card 191: 16 48 31 54 96 68 61  8 17 66 | 46 66 88 70  4 77 99 22 15 59 74  2  3  1 64 26 83 10 78 23 82 29 63 65 92',
'Card 192: 67 82 32 99 43 58 18 51 57 53 |  7 33 49 21 75 62 23 63 87 20 54 88  3 35 97 17 89 96 91 80 10 22 95  1 48',
'Card 193: 26 51 55 42 14 31 58 68  8 99 | 19 90 31 26  8 51 16 99 68 79 64 58  3 39 71 83 27 25 15 45 72 59 55 14 95',
'Card 194: 80 66 34 35  6 61 70 16 17 89 | 69 40 76 34 56 72 97 48 59 74 18 62 22 28  4 67 75 35 29 24 31 53 58 11 16',
'Card 195: 95 17 24 31 47 66 68 97 94 73 | 19 62 61 53 48 24 78 60 26 71 59 95 79 47 18 64 44  1 83  8  2 34 21 69 81',
'Card 196: 46 48 79 80 21 12  6 74 75 36 |  5 26 16 89  2  8 92  3 61 30 42 99 12 41  4 35 10 40 84 53 82 22 73 19 20',
'Card 197:  7 77 19 60 25 30  6  1 35 27 | 49 79 83 32  6 38 77  5 10 48 25 78 19  4 51 12  1  7 68 23 56 60 11 57 27',
'Card 198: 49 36 93 56 47 94 23 10 45 12 | 55 49 93 12 56 62 77 30 51 94 36  7 39  5 58 18 26 81 23 47 91  1 45 10 84',
'Card 199: 34 24 33 74 17 76 57 77 44 56 | 80 78 15  5 22 44 33 13 92 35  3 10 34  7 30 12 16 75 76 31 99 11 61 50 45',
'Card 200:  5 39 53 88 71 70 89 92 64 13 |  1 68 12 39 88 57 92 61 23 40 45 30  5 53 71  3 96 67 54 14 89 70 97 64 51',
'Card 201:  7 67 93 60  6 36 71 31 81 89 | 38 46 14 11 68 41  4 37 63 60 71 78 97 29 66 57 49 27 39 76  6  7 36 59 99',
'Card 202: 94 24 81 14 27 51 34 97  6 23 | 31 10 81 59 51 42 94  2 23 20 43 14 96 68 97 49 24 33 34 87 38 60 82 66 27',
'Card 203: 37 24 75 91 72 29 33 28 94 84 | 72  7 94 73 36 11 41 48 96  1 37 25 28  8 29 34 18 87 76 66 33 98 59 24 35',
'Card 204: 53 42 58 63  3 49 77 25 36 66 | 62 46  7  2 42 36 63 86  1 15  3 30  8 77  9  5 70 73 97 93 55  6 28 39 91',
'Card 205:  2 21 51 89 80 42 10 83 36 33 | 12 97 24 23 30 69 39 77 20 32 31 47  8 28 42 34 50 21 10 76 91 45 98 29 73',
'Card 206: 23 81 70 32 76 55 85 60 83 42 |  6 25 29 21 20 45 66 36 10 52 91 46 59 64 53 14 63 98 35 30 82 93 65 87 58',
'Card 207: 67 88 35  9 86 83 66 72 85  1 | 78 94 65 31 95 41 43 71  9 80 24 51 11  8 16 61 50 64 75 66 30 39 37 15 86',
'Card 208: 41 54 96 97 65 57 84 28 67 77 | 83 41 80 98 73 86 55  4 64 48 57 35 28 59 54 79 58 10 40 19  2 81 72  3 30',
'Card 209: 74  3 40 51 39 68 60 85 63 11 | 75 14 83 78 28 58 86 25 45 43 79 71 23 94 76 89 84 15 32 87 72 21 26 65 50',
'Card 210: 10 13 69 85 17 52 50 98 95 41 | 90 74 94 71 10 84 67  1 32 31 87 64 62 27 34 75 80  3 60 58 82 20 28 17 92',
'Card 211: 61 30 95 15 73 81 69 52 26  3 | 59  8 35 56 83  5 41 71 45  4 91 73 51 93 90 89 72 28 98  9  2 18 40 47 16',
'Card 212: 98 19 95 93 62 76 36 70  1 55 |  5 22 21 58 75 85 31 67 49 73 47 90 34 24 99 37 50 11 23 48 96 87  6 29 91',
];

export default data;