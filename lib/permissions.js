// check that the userId specified owns the documents
ownsDocuments = function(userId, doc) {
	return doc && doc.userId === userId;
}