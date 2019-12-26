var cookies = {
    get: function(name)
    {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");

        if (parts.length !== 2) {
            return null;
        }

        return decodeURIComponent(parts.pop().split(";").shift());
    },

    set: function(name, value)
    {
        var date = new Date();
        value    = encodeURIComponent(value);

        // Set it expire in a year
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));

        document.cookie = name+"="+value+"; expires="+date.toUTCString()+"; path=/";
    },

    delete: function(name)
    {
        var date = new Date();

        // Set it expire in -1 days
        date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

        document.cookie = name+"=; expires="+date.toUTCString()+"; path=/";
    }
}
