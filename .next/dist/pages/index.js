'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('C:\\Users\\NamNguyen\\Desktop\\ex2\\node_modules\\babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('C:\\Users\\NamNguyen\\Desktop\\ex2\\node_modules\\babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('C:\\Users\\NamNguyen\\Desktop\\ex2\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('C:\\Users\\NamNguyen\\Desktop\\ex2\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('C:\\Users\\NamNguyen\\Desktop\\ex2\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('C:\\Users\\NamNguyen\\Desktop\\ex2\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('C:\\Users\\NamNguyen\\Desktop\\ex2\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('C:\\Users\\NamNguyen\\Desktop\\ex2\\node_modules\\react\\react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('C:\\Users\\NamNguyen\\Desktop\\ex2\\node_modules\\next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './index.css';

// import ReactDOM from 'react-dom';
var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _head2.default,
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        'League Table'
                    ),
                    _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
                    _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/purecss@0.6.1/build/pure-min.css' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'pure-g' },
                    _react2.default.createElement('div', { className: 'pure-u-1-3' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'pure-u-1-3' },
                        _react2.default.createElement(
                            'h1',
                            null,
                            'Barclays Premier League'
                        ),
                        _react2.default.createElement(
                            'table',
                            { className: 'pure-table' },
                            _react2.default.createElement(
                                'thead',
                                null,
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'Position'
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'Team'
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'P'
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'GL'
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'W'
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'D'
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'L'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'tbody',
                                null,
                                this.props.data.standing.map(function (standing, i) {
                                    var oddOrNot = i % 2 == 1 ? "pure-table-odd" : "";
                                    return _react2.default.createElement(
                                        'tr',
                                        { key: i, className: oddOrNot },
                                        _react2.default.createElement(
                                            'td',
                                            null,
                                            standing.position
                                        ),
                                        _react2.default.createElement(
                                            'td',
                                            null,
                                            _react2.default.createElement('img', { className: 'pure-img logo', src: standing.crestURI })
                                        ),
                                        _react2.default.createElement(
                                            'td',
                                            null,
                                            standing.points
                                        ),
                                        _react2.default.createElement(
                                            'td',
                                            null,
                                            standing.goals
                                        ),
                                        _react2.default.createElement(
                                            'td',
                                            null,
                                            standing.wins
                                        ),
                                        _react2.default.createElement(
                                            'td',
                                            null,
                                            standing.draws
                                        ),
                                        _react2.default.createElement(
                                            'td',
                                            null,
                                            standing.losses
                                        )
                                    );
                                })
                            )
                        )
                    ),
                    _react2.default.createElement('div', { className: 'pure-u-1-3' })
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var res;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _axios2.default.get('http://api.football-data.org/v1/competitions/426/leagueTable');

                            case 2:
                                res = _context.sent;
                                return _context.abrupt('return', { data: res.data });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);
    return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTmFtTmd1eWVuXFxEZXNrdG9wXFxleDJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsImRhdGEiLCJzdGFuZGluZyIsIm1hcCIsImkiLCJvZGRPck5vdCIsInBvc2l0aW9uIiwiY3Jlc3RVUkkiLCJwb2ludHMiLCJnb2FscyIsIndpbnMiLCJkcmF3cyIsImxvc3NlcyIsImdldCIsInJlcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBQ0E7O0FBSEE7Ozs7Ozs7Ozs7O2lDQVNjO0FBQ04sbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUVJLDREQUFNLE1BQUssVUFBWCxFQUFzQixTQUFRLHVDQUE5QixHQUZKO0FBR0ksNERBQU0sS0FBSSxZQUFWLEVBQXVCLE1BQUssb0RBQTVCO0FBSEosaUJBREo7QUFNSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxRQUFmO0FBQ0ksMkRBQUssV0FBVSxZQUFmLEdBREo7QUFFSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESjtBQUVJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLFlBQWpCO0FBQ0k7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBTEo7QUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQU5KO0FBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBREEsNkJBREo7QUFZSTtBQUFBO0FBQUE7QUFDQyxxQ0FBS0EsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxRQUFoQixDQUF5QkMsR0FBekIsQ0FBNkIsVUFBQ0QsUUFBRCxFQUFXRSxDQUFYLEVBQWlCO0FBQzNDLHdDQUFNQyxXQUFXRCxJQUFJLENBQUosSUFBUyxDQUFULEdBQWEsZ0JBQWIsR0FBZ0MsRUFBakQ7QUFDQSwyQ0FDSTtBQUFBO0FBQUEsMENBQUksS0FBS0EsQ0FBVCxFQUFZLFdBQVdDLFFBQXZCO0FBQ0k7QUFBQTtBQUFBO0FBQUtILHFEQUFTSTtBQUFkLHlDQURKO0FBRUk7QUFBQTtBQUFBO0FBQUksbUZBQUssV0FBVSxlQUFmLEVBQStCLEtBQUtKLFNBQVNLLFFBQTdDO0FBQUoseUNBRko7QUFHSTtBQUFBO0FBQUE7QUFBS0wscURBQVNNO0FBQWQseUNBSEo7QUFJSTtBQUFBO0FBQUE7QUFBS04scURBQVNPO0FBQWQseUNBSko7QUFLSTtBQUFBO0FBQUE7QUFBS1AscURBQVNRO0FBQWQseUNBTEo7QUFNSTtBQUFBO0FBQUE7QUFBS1IscURBQVNTO0FBQWQseUNBTko7QUFPSTtBQUFBO0FBQUE7QUFBS1QscURBQVNVO0FBQWQ7QUFQSixxQ0FESjtBQVdILGlDQWJBO0FBREQ7QUFaSjtBQUZKLHFCQUZKO0FBa0NJLDJEQUFLLFdBQVUsWUFBZjtBQWxDSjtBQU5KLGFBREo7QUE2Q0g7Ozs7Ozs7Ozs7O3VDQWpEcUIsZ0JBQU1DLEdBQU4sQ0FBVSw4REFBVixDOzs7QUFBWkMsbUM7aUVBQ0MsRUFBQ2IsTUFBTWEsSUFBSWIsSUFBWCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFIYyxnQkFBTWMsUyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9OYW1OZ3V5ZW4vRGVza3RvcC9leDIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICgpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9hcGkuZm9vdGJhbGwtZGF0YS5vcmcvdjEvY29tcGV0aXRpb25zLzQyNi9sZWFndWVUYWJsZScpO1xyXG4gICAgICAgIHJldHVybiB7ZGF0YTogcmVzLmRhdGF9XHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TGVhZ3VlIFRhYmxlPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9wdXJlY3NzQDAuNi4xL2J1aWxkL3B1cmUtbWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+QmFyY2xheXMgUHJlbWllciBMZWFndWU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicHVyZS10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qb3NpdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRlYW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+R0w8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5XPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLnN0YW5kaW5nLm1hcCgoc3RhbmRpbmcsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvZGRPck5vdCA9IGkgJSAyID09IDEgPyBcInB1cmUtdGFibGUtb2RkXCIgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9IGNsYXNzTmFtZT17b2RkT3JOb3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGFuZGluZy5wb3NpdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbWcgY2xhc3NOYW1lPVwicHVyZS1pbWcgbG9nb1wiIHNyYz17c3RhbmRpbmcuY3Jlc3RVUkl9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGFuZGluZy5wb2ludHN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhbmRpbmcuZ29hbHN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhbmRpbmcud2luc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGFuZGluZy5kcmF3c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGFuZGluZy5sb3NzZXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXX0=