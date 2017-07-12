var iillImage = {
    // Properties
    Name : "",
    Path :  "",
    Index : null,
    FollowingPoint : {
        x: 0, 
        y: 0
    },
    HexcodeArea : "",
    
    // Methods
    getHexcodeArea: function()
    {
        return this.hexcodeArea;
    },
    setHexCodeArea: function(hexcodeArea)
    {
        if(!hexcodeArea)
            return;
        this.hexcodeArea = hexcodeArea;
    },
    getName: function()
    {
        return this.name;
    },
    setName: function(name)
    {
        if(!name)
            return;
    
        this.Name = name;
    },
    getPath : function()
    {
        return this.Path;
    },
    setPath : function(path)
    {
        if(!path)
            return;
        this.Path = path;
    },
    getIndex : function()
    {
        return this.Index;
    },
    setIndex : function(index)
    {
        this.Index = index;
    }
};