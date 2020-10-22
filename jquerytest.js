
$(document).ready(function () {

    var idPost;
    console.log("idPost:", idPost) //Undefined


    $('#savePostButton').click(function () {

        // 1. Cattura i valori
        var postTitle = $('#postTitle').val();
        console.log("postTitle changed:", postTitle);
        var subTitlePost = $('#postSubTitle').val();
        console.log("postSubtitle:", subTitlePost);
        var postBody = $('#postBody').val();
        console.log("postBody:", postBody);
        var postAuthor = $('#postAuthor').val();
        console.log("postAuthor:", postAuthor);
        var postFeatured = $('#featuredCheck').is(":checked");
        console.log("postFeatured:", postFeatured);
        var postPublic = $('#publicCheck').is(":checked");
        console.log("postPublic:", postPublic);



        // 2. li mette in data
        var data = {
            title: postTitle,
            subtitle: subTitlePost,
            body: postBody,
            author: postAuthor,
            featured: postFeatured,
            public: postPublic,
            archived: false,
        }

        console.log("data:", data)



        // 3. crea l'oggetto Post (class Post)
        var post = new Post(data)

        console.log("post creato:", post)
        // Fin qua funziona tutto. Anche se data non passa i parametri nell'ordine definito.


        // 4. CreateUIPost(post)

        //createUIPost(post)




        //3.5
        /*$.post({
            url: "http://localhost:3000/posts",
            data: data,
            success: function (msgRitornato, textStatus) {
                console.log('msgRitornato:', msgRitornato);
                console.log('textStatus:', textStatus);
                console.log('msgRitornato._id:', msgRitornato._id); // è l'id del post!
                idPost = msgRitornato._id;
                console.log(idPost)
                // createUIPost
                // Ora devi creare il post con idPost (per i commenti)
                // Per crearlo scrivi una funzione da un'altra parte. 
                // Nota che non possiamo scrivere la funzione dopo il post (ovvero al di
                // fuori di success). Questo perchè dobbiamo aspettare che 
                // il la chiamata ajax, che è asincrona, abbia terminato e ritornato
                // il valore di idPost.

            }
        })*/

    })


    // Questa funzione dovrà avere più parametri, come il titolo e il body del post e altro.
    // Oppure solo un parametro in più in cui inseriato un oggetto di classe post, che
    // dobbiamo primare creare.

    function createUIPost(post) { // Passiamo un oggetto di tipo post
        var title = post.title
        var body = post.body
        var subtitle = post.subtitle
        var postPublic = post.public
        var featured = post.featured
        var archived = post.archived
        var author = post.author

        //this.id = id;
        //this.immagine = immagine;
        //this.dataCreazione = dataCreazione;


        //OPerazioni di cambio variabili titolo ontouchstart...

        /*var result = top1 + title + center1 + body + center2 + comment + bottom

        if post.featured == true ...allora prepend.Altrimenti append.

            $('#wheretoaddposts').prepend(result)
        */


        //$('wherrTo').append(l'oggettofinale)

    }

});