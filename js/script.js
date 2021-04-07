$(document).ready(function() {
    const cards = document.querySelectorAll(".card");

    var flippedCard = false;
    var lockBoard = false;
    var firstCard;
    var secondCard;

    $(".card").click(function() {
        if(lockBoard) return;
        $(this).addClass("flip");

        if(!flippedCard) {
            flippedCard = true;
            firstCard = $(this);
        } else {
            flippedCard = false;
            secondCard = $(this);

            if(firstCard.attr("data-framework") === secondCard.attr("data-framework")) {
                setTimeout(function() {
                    firstCard.addClass("win");
                    secondCard.addClass("win");

                    if($(".win").length === 12) {
                        setTimeout(function() {
                            $(".container").fadeOut();
                        }, 1000);
                        $(".winner").fadeIn();
                    }
                }, 500);
            }else {
                lockBoard = true;
                setTimeout(function() {
                    firstCard.removeClass("flip");
                    secondCard.removeClass("flip");

                    lockBoard = false;
                }, 1000);
            }
        }
    });

    (function shuffle() {
        cards.forEach(card => {
            var random = Math.floor(Math.random()* 12);
            card.style.order = random;
        });
    })();


        

});
