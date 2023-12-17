const data = [
'A8J5J 809',
'3433Q 57',
'228KA 203',
'33232 521',
'34A57 552',
'94939 454',
'7J6AT 988',
'66K63 19',
'54AJK 879',
'Q8K23 628',
'429A8 449',
'KK2K2 487',
'T2Q34 830',
'4TQQ4 425',
'K44K9 695',
'K9QK6 85',
'225J6 9',
'9TJT9 226',
'25844 204',
'T3993 931',
'T8369 961',
'28K82 368',
'Q5K64 575',
'72999 847',
'T7777 198',
'55999 522',
'28882 156',
'84J27 55',
'67Q77 631',
'JQK38 107',
'38Q43 199',
'7QJ84 359',
'Q5656 379',
'83843 384',
'6J27Q 667',
'69TQ6 30',
'36774 187',
'JA666 680',
'33J48 715',
'QQ999 305',
'7Q9TJ 870',
'453Q7 767',
'AKAKK 597',
'2JKKT 576',
'JKQ2Q 320',
'QQTQK 101',
'TQ975 468',
'6T73K 41',
'98A34 11',
'JK4AJ 463',
'666JJ 742',
'T333J 332',
'9AK46 880',
'324J9 283',
'5535Q 224',
'QQKKQ 352',
'66266 177',
'K89K9 458',
'TTTT9 649',
'KQ935 848',
'J8JJJ 155',
'555A6 136',
'9QKQ5 309',
'6AJ65 964',
'A23Q2 862',
'K7QA9 241',
'43759 265',
'66A66 129',
'TKKK8 634',
'5TKKK 735',
'QKKK4 414',
'33JTT 95',
'63A6A 983',
'K78K8 942',
'4Q52A 885',
'QTAAT 314',
'TTTQT 264',
'999A9 194',
'7JKJA 936',
'J4444 893',
'QQAQA 864',
'K8888 731',
'AAJKK 472',
'867T5 729',
'9QKJ6 255',
'8A5A5 930',
'A3KQ3 489',
'KK999 664',
'Q22QQ 310',
'J8TJ3 105',
'4285J 533',
'AQQQ2 516',
'5755J 793',
'2TT2T 12',
'78KJ8 873',
'995AJ 643',
'7977J 990',
'295T5 422',
'QJ3A4 184',
'QQQ26 248',
'44848 287',
'5J656 315',
'QQQ9Q 294',
'TQA67 484',
'8A662 920',
'59393 56',
'9997Q 828',
'TJ3QJ 277',
'2Q277 600',
'JKQQT 500',
'58888 673',
'55522 236',
'26887 245',
'3JA3A 21',
'TK4TK 15',
'T38K4 891',
'AKQAQ 490',
'AJ9QA 452',
'44T43 208',
'T9Q9J 905',
'JQJQ4 574',
'AA369 783',
'Q8K49 158',
'8Q74K 387',
'7AAAA 216',
'Q5KQQ 68',
'54J5K 617',
'KK2JK 32',
'4A29T 398',
'444JJ 517',
'9T82Q 531',
'T868Q 238',
'5585J 52',
'9JAK3 456',
'26289 295',
'3766J 622',
'KKTAK 147',
'9J46K 334',
'739QT 512',
'8TTQ5 252',
'78957 162',
'555J5 13',
'A3858 14',
'J9JJ9 662',
'KK8KK 424',
'QTQTT 871',
'5TT5J 20',
'8897A 342',
'99J9T 884',
'T6J78 710',
'ATTTA 934',
'TTJ63 346',
'A4325 290',
'5K7K7 83',
'QQA96 605',
'8K8KK 693',
'82885 232',
'8A3A2 38',
'KJQ93 802',
'34TTT 829',
'6T2TQ 406',
'748J4 826',
'AJ555 530',
'Q4K48 994',
'48948 223',
'74666 181',
'49444 278',
'54886 470',
'99A7A 803',
'4784Q 543',
'4AK3T 747',
'T9J8Q 306',
'Q4K77 275',
'Q3QQQ 672',
'A237J 459',
'3J333 776',
'JJJK5 349',
'5Q455 619',
'343AA 71',
'97777 817',
'69669 835',
'85J45 766',
'TT2TA 998',
'5555Q 34',
'KT245 620',
'5T7AA 93',
'KKK36 432',
'5QQJ4 956',
'A375A 79',
'Q9229 948',
'JQ33Q 291',
'858A8 925',
'T4JKT 892',
'366Q9 240',
'2J8QQ 967',
'66646 243',
'68866 726',
'TTJAT 682',
'3A248 446',
'33373 122',
'6J866 813',
'Q9QK9 404',
'2TTT9 49',
'A28K7 935',
'KA458 467',
'333A3 451',
'7A7AJ 402',
'6K9T9 852',
'77747 426',
'JQK53 661',
'4T455 653',
'Q5527 109',
'K3399 822',
'78A9T 161',
'454J5 423',
'49T86 630',
'77778 537',
'722JJ 955',
'Q248J 760',
'3J26A 725',
'3533J 593',
'T7T7Q 568',
'J7JQQ 298',
'3K878 66',
'94994 272',
'44344 175',
'66Q64 688',
'7J737 811',
'2J84A 113',
'JT9T4 51',
'KKJ7K 103',
'5T5TT 50',
'8858Q 455',
'276Q7 410',
'257K3 656',
'K33K3 330',
'T6TQ6 97',
'999K9 82',
'63K29 491',
'365A6 508',
'2JJKK 609',
'AA6K9 765',
'7K968 808',
'25J7T 46',
'6J6K5 538',
'9J997 173',
'QKKQT 583',
'32KJQ 897',
'K4935 933',
'28228 125',
'7Q3J2 326',
'KTT36 148',
'38344 999',
'77757 502',
'86JQT 556',
'8578J 706',
'JJ333 134',
'4QQQQ 746',
'8QK3K 774',
'Q56K9 995',
'KT3JK 604',
'QJKJ2 348',
'6767T 81',
'JKKKQ 572',
'222K8 607',
'55222 972',
'6769A 889',
'79379 89',
'KAJKK 73',
'KJJ43 997',
'79768 569',
'J7A4A 946',
'Q6Q39 911',
'J2Q49 202',
'77229 96',
'3T333 63',
'49T25 912',
'AA96A 676',
'TT6JT 201',
'999Q9 954',
'T7A64 899',
'JK6KK 338',
'6Q77K 60',
'J7TTT 260',
'K2QQQ 791',
'26766 703',
'24QQA 843',
'34333 638',
'99696 769',
'Q7977 952',
'733JA 883',
'T7AAA 128',
'QQQQT 624',
'523QT 347',
'Q8888 337',
'23Q25 602',
'548KT 886',
'2K9A5 100',
'QAQQQ 420',
'28494 486',
'96A9K 868',
'A66AA 623',
'Q9Q9Q 658',
'6QJ6K 412',
'A7A6T 311',
'TT8J8 984',
'954A3 59',
'37A8K 273',
'J3QJQ 753',
'97999 78',
'T2279 118',
'37377 281',
'555J4 687',
'A46K6 657',
'8KAK8 429',
'63643 344',
'96857 797',
'76644 394',
'QQAAA 135',
'7265T 58',
'T67T3 421',
'689J6 681',
'J3424 720',
'8KJJA 356',
'5J599 416',
'Q37J9 377',
'4J9QQ 409',
'45555 939',
'A727J 646',
'A65JT 981',
'TT9JJ 618',
'626T5 647',
'74TA7 211',
'6389K 824',
'9QA9A 759',
'J36JJ 932',
'AQA7A 877',
'9AAJ9 444',
'AQ7AQ 4',
'4JJ6J 428',
'6K3K6 689',
'875KJ 866',
'T77TT 323',
'8QJ32 612',
'QQKQQ 700',
'Q9444 782',
'68K9J 979',
'A4AAK 367',
'8JA8K 288',
'69QJA 540',
'JQJ85 80',
'82Q39 498',
'74772 962',
'99922 76',
'KAK84 197',
'66866 152',
'54445 189',
'57J7J 328',
'3ATTT 745',
'6K646 92',
'T63A5 785',
'3T9KA 974',
'Q85QQ 770',
'3KK2K 527',
'8772J 473',
'JAJ55 854',
'7529K 844',
'33493 819',
'279J8 106',
'4KK8J 563',
'5K5K5 751',
'7QK62 945',
'794A7 704',
'46QT2 548',
'J77T7 364',
'A5A5J 639',
'T66TJ 382',
'AA8KT 784',
'K5K4A 296',
'J55J5 598',
'Q7Q77 985',
'78774 965',
'398T7 141',
'9848T 771',
'47584 124',
'7JT47 924',
'T6999 392',
'977JQ 709',
'T4K62 860',
'7K722 362',
'A7JAA 787',
'4T4JJ 549',
'5J92J 616',
'QJT27 901',
'58558 53',
'555K5 851',
'57457 84',
'JJ842 450',
'A3KAK 381',
'AAQJJ 67',
'985T9 378',
'Q899J 737',
'KA549 363',
'75K2J 102',
'9K9Q9 497',
'33533 991',
'9QK6T 743',
'94652 115',
'642T3 27',
'4J299 730',
'5KK3K 535',
'9J588 748',
'63472 867',
'98K6A 215',
'K9J4K 744',
'58255 825',
'99969 831',
'22Q68 324',
'A6665 926',
'KJJAT 679',
'392J7 739',
'J65T6 775',
'2AA8A 881',
'69666 166',
'Q969J 896',
'22893 698',
'JKK33 509',
'4JJ46 779',
'33222 374',
'AJA22 515',
'7669J 603',
'73787 504',
'33858 959',
'34T2J 857',
'TKQQ9 485',
'A9T34 723',
'4KQQQ 389',
'JQ2Q5 112',
'93T33 529',
'QQ5QQ 233',
'42949 507',
'5K553 466',
'44KKJ 1000',
'6J783 42',
'822A8 592',
'48847 116',
'AJA7T 505',
'44J24 214',
'55454 274',
'2KA84 914',
'4TT24 788',
'3J553 221',
'A5687 307',
'73388 169',
'67667 798',
'992JQ 335',
'Q6665 846',
'K9KAK 354',
'TAQ72 518',
'72727 210',
'99929 875',
'7J777 75',
'22J22 650',
'6AJ5A 258',
'85J4J 834',
'KT2J3 462',
'J59KT 461',
'QQTTQ 841',
'J4488 413',
'JJ5K5 941',
'5KQT3 733',
'64Q4K 254',
'4JJ77 327',
'JA22K 270',
'47444 850',
'73956 577',
'KKK33 977',
'KKK3K 978',
'AAAAJ 614',
'Q3KQ3 371',
'23J22 878',
'KQ5A3 532',
'K3KKA 235',
'2Q48Q 481',
'25A58 626',
'AK7AA 810',
'Q8T8Q 457',
'2TT83 206',
'8Q985 176',
'JA54Q 436',
'88J88 859',
'TKTTK 890',
'787AA 902',
'3882J 393',
'JAT77 244',
'994J7 207',
'Q8898 579',
'J8A8A 973',
'595KT 121',
'7232K 718',
'QA3QJ 212',
'9A92A 351',
'ATAJ4 669',
'Q3QA3 494',
'54779 159',
'37J33 495',
'6QQQK 943',
'9KKKK 832',
'T99TT 714',
'K4AJ3 659',
'29959 580',
'KK55Q 37',
'8JJ44 345',
'A987J 686',
'4T5JJ 544',
'44KA4 247',
'946Q2 234',
'Q299Q 976',
'QQ497 70',
'6578K 31',
'8J85J 469',
'TT8A2 690',
'JJA99 573',
'K3TTT 590',
'2JTQK 479',
'858Q4 738',
'242J2 45',
'A942K 292',
'4A242 431',
'599K4 699',
'7J579 665',
'55599 482',
'75Q5J 26',
'99994 523',
'6QQJQ 33',
'65556 895',
'898TA 794',
'J4AA9 853',
'392J9 578',
'7Q333 228',
'4JKTJ 558',
'4443J 929',
'KA5A6 944',
'K29J4 433',
'88788 17',
'JJ737 493',
'27T27 692',
'97877 526',
'K4848 888',
'Q954A 958',
'A4A44 25',
'QAAAJ 419',
'KKJ4T 546',
'59946 140',
'8T2JK 395',
'237AK 253',
'84Q44 553',
'78788 353',
'J925T 585',
'JAJAA 227',
'JTAAT 539',
'99777 139',
'TT938 213',
'J6665 163',
'77A55 62',
'7QA5J 179',
'T3K33 361',
'4KJ46 773',
'55A88 637',
'7TJ28 684',
'A77A7 719',
'585AT 443',
'4J92J 2',
'JQQ77 110',
'J2KKA 629',
'AA5A8 313',
'6AJAA 496',
'K9KJ9 987',
'QQTT8 968',
'8J82T 732',
'347J3 144',
'22277 560',
'TJKKT 302',
'5Q522 229',
'7K778 127',
'66J66 126',
'98J92 608',
'JKK28 863',
'96955 249',
'2K5Q8 752',
'K52A3 601',
'93Q86 506',
'93264 754',
'333T8 411',
'92J92 172',
'22722 615',
'48TQ2 476',
'49524 645',
'844T3 276',
'99JKA 408',
'92293 74',
'87T92 816',
'Q9A75 72',
'T3TTT 18',
'98888 635',
'838J3 117',
'222AA 741',
'44446 90',
'TT2J2 150',
'65222 777',
'999JJ 534',
'2A2T6 937',
'JJJJJ 10',
'27A27 230',
'24444 606',
'87778 778',
'TA8QJ 839',
'5TTTT 336',
'K78JT 519',
'A5KA5 865',
'42255 503',
'99J99 908',
'373J8 492',
'63863 947',
'5JK32 390',
'33399 711',
'6444K 722',
'99J94 143',
'82Q2Q 792',
'6JQ64 555',
'9Q85K 188',
'K378T 960',
'39268 119',
'AJA2Q 1',
'32333 547',
'5A55Q 584',
'89896 904',
'22226 318',
'Q292Q 511',
'KKKKJ 86',
'2KJK2 677',
'86K35 663',
'A8Q9J 403',
'Q6T6Q 499',
'A4JJ4 807',
'8QT57 405',
'7A744 385',
'5K5KK 399',
'64966 827',
'J992J 133',
'24466 154',
'AAQJQ 316',
'TT8TK 586',
'9K7AK 587',
'667JJ 910',
'JQQQQ 400',
'8444J 528',
'4QQ4A 858',
'KK598 246',
'AATAT 445',
'J756A 837',
'TJ632 916',
'T4697 913',
'2J225 474',
'6JKKJ 146',
'57498 372',
'2222A 7',
'Q444A 750',
'A4AAJ 660',
'TQ548 876',
'JJQQQ 697',
'7A777 375',
'QQQQ7 98',
'65656 65',
'57757 763',
'A53K6 957',
'2K8KK 191',
'666K7 370',
'J77TT 872',
'JTT75 786',
'57494 749',
'648A6 887',
'3982A 48',
'9A2JJ 820',
'KJ5T5 724',
'A773A 918',
'K6754 488',
'8A58A 442',
'88AA8 845',
'K3K5J 909',
'8JJ8T 123',
'555AA 756',
'K33J3 514',
'57975 861',
'386K2 167',
'J9783 927',
'27744 383',
'2J6Q8 707',
'2KQT8 823',
'766J6 196',
'4A499 717',
'6J524 708',
'744K7 683',
'2Q22A 396',
'3Q9T8 138',
'884TJ 192',
'K6898 321',
'6K446 29',
'85634 427',
'5J588 559',
'96J96 678',
'KQQ3T 833',
'AJ755 369',
'444T4 550',
'68277 267',
'AJ7J4 373',
'Q4Q4Q 652',
'22822 582',
'36K79 195',
'9797T 286',
'89999 460',
'66J33 636',
'55888 640',
'53693 716',
'39KJ8 762',
'55K59 796',
'96JKK 183',
'55855 268',
'J4K83 285',
'KK7KK 299',
'KKKKT 940',
'J77J7 906',
'88TTT 388',
'5T54J 111',
'T8QA9 806',
'22K22 256',
'JT228 970',
'79624 322',
'KKK77 69',
'88JJ8 91',
'A222T 132',
'67JA7 312',
'77767 971',
'869J2 471',
'9T998 595',
'JA266 64',
'2272T 755',
'9K7J6 22',
'254T5 849',
'82T9J 289',
'Q76TJ 331',
'TQQT6 5',
'77737 536',
'7T783 567',
'8T888 705',
'6T53K 186',
'Q6K57 301',
'78Q78 130',
'5K656 293',
'33J32 339',
'66J96 894',
'57J53 581',
'6K554 217',
'KKJKJ 696',
'5AAA5 789',
'29429 44',
'5K552 969',
'8442T 928',
'84444 137',
'T9J48 557',
'56KA8 386',
'7QQ27 764',
'A828A 165',
'AA699 641',
'79922 570',
'JA5T8 407',
'449QJ 651',
'5555T 43',
'5TK97 907',
'78487 478',
'QQQ55 448',
'88848 938',
'3J55T 99',
'6J94A 16',
'99K97 358',
'34643 818',
'226K6 88',
'62226 415',
'T3633 758',
'K2KA9 350',
'4K968 903',
'9TKA4 284',
'7T274 220',
'TTJTT 108',
'8J625 589',
'JQKQQ 28',
'5AJ59 209',
'J779K 239',
'QQQ2Q 795',
'836KT 477',
'A4432 8',
'8998J 855',
'7JJJA 882',
'44646 303',
'J9A2A 781',
'QKKQ2 721',
'Q8Q2Q 898',
'6464Q 297',
'T99QA 993',
'82K9A 953',
'36667 453',
'383QQ 120',
'37J49 193',
'7T758 805',
'J5TTT 170',
'8AAJQ 36',
'AT7TJ 632',
'T777A 6',
'833A9 917',
'A254K 992',
'A4QTQ 259',
'88522 480',
'7J3JJ 836',
'5453T 366',
'7J2JT 613',
'AATT4 47',
'K99J3 757',
'567Q8 114',
'A9AAA 242',
'JJ343 218',
'3Q66Q 87',
'35A62 231',
'2J924 250',
'4TTQ4 430',
'2QKJ8 279',
'Q7555 257',
'TTT7T 520',
'4TT45 922',
'T2375 610',
'2J5QA 465',
'99498 145',
'TTKTQ 205',
'26358 674',
'66622 727',
'66446 821',
'6K686 975',
'653Q2 963',
'J2A26 772',
'88288 761',
'5T57T 986',
'2QA9A 269',
'JTT79 666',
'A2KKK 571',
'346JK 261',
'9K9A9 3',
'T3A6T 341',
'22422 701',
'T7KJA 838',
'K4KA3 541',
'A94TJ 435',
'7JQ59 982',
'54444 633',
'4J5Q6 280',
'7TAA2 365',
'J52J6 447',
'TT777 513',
'J8789 740',
'256JT 524',
'AK44K 317',
'K6T6K 171',
'9JJ22 648',
'33JAK 525',
'T988T 262',
'2JQQ2 685',
'5T8TJ 736',
'6K2J8 542',
'75AT8 554',
'59J5J 185',
'88886 153',
'J2727 734',
'3K95T 562',
'7J677 376',
'JT4QJ 856',
'923Q7 190',
'T43TJ 713',
'A975T 160',
'4KT95 921',
'63QT2 804',
'ATTTT 77',
'39Q99 142',
'AKAAK 801',
'99444 790',
'59953 915',
'78522 545',
'63J6J 54',
'4553Q 40',
'A3KJ8 510',
'J4449 627',
'J8J48 815',
'68383 923',
'98889 325',
'JK9KQ 61',
'3653J 434',
'Q8QQQ 401',
'AAAAK 174',
'35J55 642',
'4T5JK 588',
'J7QK7 439',
'55A9A 966',
'K2K26 800',
'AKT32 304',
'Q6Q6J 599',
'37JJ3 418',
'5227J 23',
'JJ62A 440',
'2K888 437',
'QTQ7J 380',
'3J25J 104',
'46342 157',
'336K7 180',
'4444A 168',
'AQ686 391',
'TQTJQ 591',
'J4456 441',
'5T5T5 949',
'693A4 266',
'92JTJ 654',
'T4QA8 768',
'ATAAA 814',
'KK46Q 329',
'36366 951',
'88348 670',
'AATQQ 24',
'TTQ8T 980',
'56TTT 625',
'99J86 668',
'55552 438',
'25934 675',
'AJQQQ 996',
'J2323 263',
'9QQQA 712',
'4Q7K4 360',
'Q958T 308',
'55542 35',
'68459 164',
'K5427 475',
'858KK 357',
'85Q75 251',
'85587 596',
'99K22 483',
'A4555 182',
'Q2337 919',
'96784 900',
'7J53Q 333',
'6J82A 869',
'4QQJ4 151',
'586K5 464',
'KT36J 551',
'KKK84 566',
'92AQ8 149',
'K369Q 340',
'2QQTQ 178',
'J3T35 564',
'K2TQ9 644',
'T7TKA 655',
'Q4Q44 840',
'Q83TA 282',
'6456T 417',
'A6AAA 39',
'Q74JA 237',
'2222T 702',
'5A444 271',
'82448 222',
'6TJ55 694',
'56699 131',
'AT936 671',
'522JT 842',
'45T55 200',
'8AQ44 691',
'6TAAT 728',
'JQ245 501',
'389T3 225',
'33933 300',
'A696A 561',
'37367 343',
'9KJKK 812',
'388A8 611',
'3TTJT 565',
'T5KKT 874',
'T3J9J 950',
'33Q33 780',
'Q2876 799',
'K76T6 319',
'3QT23 594',
'7AA7A 621',
'T7757 355',
'TT44T 94',
'KKK2K 397',
'KKKK6 989',
'AAA42 219 ',
]

export default data;