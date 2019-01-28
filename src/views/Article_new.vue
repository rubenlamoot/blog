<template>

    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="text-center my-3">Nieuw artikel toevoegen</h1>
                <form class="mb-5">
                    <div class="form-group">
                        <label for="artikel.Auteur">Uw Naam:</label>
                        <input type="text" class="form-control" id="artikel.Auteur" placeholder="Naam" v-model="artikel.Auteur">
                    </div>
                    <div class="form-group">
                        <label for="artikel.Titel">Titel van het artikel:</label>
                        <input type="text" class="form-control" id="artikel.Titel" placeholder="Titel" required maxlength="40" v-model="artikel.Titel">
                    </div>
                    <div class="form-group">
                        <label for="artikel.Short">Korte beschrijving van het artikel:</label>
                        <input type="text" class="form-control" id="artikel.Short" placeholder="Korte beschrijving" v-model="artikel.Short">
                    </div>
                    <div class="form-group">
                        <label for="artikel.Foto">Foto bijvoegen:</label>
                        <input type="file" class="form-control-file" id="artikel.Foto">
                    </div>
                    <div class="form-group mb-3">
                        <label for="artikel.Tekst">Het artikel zelf:</label>
                        <textarea class="form-control" id="artikel.Tekst" rows="10" v-model="artikel.Tekst"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mr-5">Opslaan</button>
                    <button type="button" class="btn btn-secondary" @click="reset">Wissen</button>
                    <button type="button" class="btn btn-secondary float-right">Sluiten</button>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
    var d = new Date();

    export default {
        data(){
            return{
                artikel: {
                    Auteur : '',
                    Titel : '',
                    Short : '',
                    Foto : '',
                    Tekst : '',
                    Datum : d
                }
            }
        },
        methods:{
            reset(){
                this.artikel = {
                    Auteur : '',
                    Titel : '',
                    Short : '',
                    Foto : '',
                    Tekst : '',
                    Datum : d
                }
            }
        }
    }
</script>
