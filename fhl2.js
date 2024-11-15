function fhlData() {
    var dataSet = [
        [
            '1',
            'Bennett, Bruce',
            'A time series of bacterial changes in egested Holthurian feces',
            '',
            'Oceanography 590b',
            'Animal Microbe Sediment Relations',
            'Summer',
            '1988',
            '',
            ''
        ],
        [
            '2',
            'Brumsickle, Steve',
            'Oxygen depletion in Thalassinid mounds based on pore-water iron profiles',
            '',
            'Oceanography 590b',
            'Animal Microbe Sediment Relations',
            'Summer',
            '1988',
            '',
            ''
        ],
        [
            '3',
            'Gregg, Jack',
            'Microphytobenthic production: significance to the carbon budget of San Fransisco Bay',
            '',
            'Oceanography 590b',
            'Animal Microbe Sediment Relations',
            'Summer',
            '1988',
            '',
            'San Francisco Bay'
        ],
        [
            '4',
            'Hentschel, Brian T.',
            'High abundance of bacteria in lugworm feeding pockets: support for the gardening hypothesis',
            '',
            'Oceanography 590b',
            'Animal Microbe Sediment Relations',
            'Summer',
            '1988',
            '',
            ''
        ],
        [
            '5',
            'Ritzrau, Will',
            'Increas of microbial activity rates caused by mechanical disturbance of intertidal sediments',
            '',
            'Oceanography 590b',
            'Animal Microbe Sediment Relations',
            'Summer',
            '1988',
            '',
            ''
        ],
        [
            '6',
            'Robertson, Charles',
            'Assessing the gut microflora of Parastichopus californicus, an epibenthic, deposit-feeding Holothurian: evidence of a possible Spirilli endosymbiont',
            '',
            'Oceanography 590b',
            'Animal Microbe Sediment Relations',
            'Summer',
            '1988',
            'Parastichopus californicus',
            ''
        ],
        [
            '7',
            'Shimeta, Jeff',
            'Food for benthic suspension feeders: suspended load in Lopez Sound and the role of migrating benthic diatoms',
            '',
            'Oceanography 590b',
            'Animal Microbe Sediment Relations',
            'Summer',
            '1988',
            '',
            'Lopez Sound'
        ],
        [
            '8',
            'Bantzer, Christian',
            'Nonlinear interaction of orographic and thermal forcing in a shallow water model',
            '',
            'Oceanography 590b',
            'Atmosphere Ocean Dynamics',
            'Summer',
            '1993',
            '',
            ''
        ]
    ]

    new DataTable('#example', {
        data: dataSet,
        columns: [
            { title: '\ufeffNumber' },
            { title: 'Author' },
            { title: 'Title' },
            { title: 'Pages' },
            { title: 'Class Number' },
            { title: 'Class Name' },
            { title: 'Quarter' },
            { title: 'Year' },
            { title: 'Descriptors' },
            { title: 'Location' }
        ],
        initComplete: function () {
            // Code to execute after the table is fully initialized
            console.log("DataTables has been initialized!");

            this.api()
                .columns()
                .every(function () {
                    let column = this;
                    let title = column.footer().textContent;

                    // Create input element
                    let input = document.createElement('input');
                    input.placeholder = title;
                    column.footer().replaceChildren(input);

                    // Event listener for user input
                    input.addEventListener('keyup', () => {
                        if (column.search() !== this.value) {
                            column.search(input.value).draw();
                        }
                    });
                });
        }

    })


}

new DataTable('#example', {
    initComplete: function () {
        this.api()
            .columns()
            .every(function () {
                let column = this;
                let title = column.footer().textContent;

                // Create input element
                let input = document.createElement('input');
                input.placeholder = title;
                column.footer().replaceChildren(input);

                // Event listener for user input
                input.addEventListener('keyup', () => {
                    if (column.search() !== this.value) {
                        column.search(input.value).draw();
                    }
                });
            });
    }
});