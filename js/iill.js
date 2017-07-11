var IILL = function(){
    
    // Constants
    var Libraries = ["http://code.jquery.com/jquery.js"];

    // Members
    // var = ;

    // Methods

    /* importLibraries(array[string] additionalLibs)
     * Imports libraries from libraries const and additionalLibs
     */
    var InitializeComponent = function (additionalLibs)
    {
        var me        = this,
            libraries = new Array("http://code.jquery.com/jquery.js", "illImage.js");

        libraries.forEach(function(lib) {
            var jq = document.createElement("script");
            jq.src = lib;
            document.querySelector("head").appendChild(jq);
        }, this);
    };


    return {
        init: InitializeComponent,
    };
}();

IILL.init();