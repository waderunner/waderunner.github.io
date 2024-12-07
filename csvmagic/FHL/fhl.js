function fhlData() {

    new DataTable('#fhlresearch', {
        keys: true,
        ajax: '/csvmagic/FHL/data/fhl-data-array.json',
        order: [[4, 'asc']],
        columnDefs: [{ type: 'integer', targets: 0 }],
        columnDefs: [{ visible: false, targets: 0 }],
        columns: [
            { data: 'Number' },
            { data: 'Author' },
            { data: 'Title' },
            { data: 'Pages' },
            { data: 'Class Number' },
            { data: 'Class Name' },
            { data: 'Quarter' },
            { data: 'Year' },
            { data: 'Descriptors' },
            { data: 'Location' }
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
                    input.placeholder = 'Search by ' + title;
                    column.footer().replaceChildren(input);

                    // Event listener for user input
                    input.addEventListener('keyup', () => {
                        if (column.search() !== this.value) {
                            column.search(input.value).draw();
                        }
                    });
                });
            $('#fhlresearch tfoot tr').appendTo('#fhlresearch thead');
        }
    });

}

/* ======= */

/* function fhlData() {
 
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


} */
