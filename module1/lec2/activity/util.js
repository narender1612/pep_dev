module.exports = {
    "Documents" : ["doc", "pdf", "txt"],
    "Images" : ["img", "jpg", "gif", "png"],
    "Audio" : ["mp3"],
    "Video" : ["mp4", "mkv"],
    "Applications" : ["exe"]
}
// the above can be written without "" as well, the key part of it
// module.exports will make whatever is written in right side of = as somethign that can be imported by another file
// point to note is that a .js file can never be imported fully, it needs to add its elements that it wants to export into
// module.exports obkect which is by default empty, and then other files can import that part into their own usage 