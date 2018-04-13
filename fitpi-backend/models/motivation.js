
exports.all = function(cb) {
    var list = [
        { id: 1, source: 'Arnold Schwarzenegger', image: '1.jpg', text: 'The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not a champion. That’s what most people lack, having the guts to go on and just say they’ll go through the pain no matter what happens.' },
        { id: 2, source: 'Muhammad Ali', image: '1.jpg', text: 'I hated every minute of training, but I said, \'Don’t quit. Suffer now and live the rest of your life as a champion.\'' },
        { id: 3, source: '', image: '1.jpg', text: 'Don’t wish for a good body. Work for it.' },
        ];

    cb(null, list);
}